package com.ken.forum_server.controller;

import com.alibaba.fastjson.JSONObject;
import com.ken.forum_server.annotation.TokenFree;
import com.ken.forum_server.common.Result;
import com.ken.forum_server.exception.CustomException;
import com.ken.forum_server.exception.CustomExceptionCode;
import com.ken.forum_server.pojo.User;
import com.ken.forum_server.service.FollowService;
import com.ken.forum_server.service.LikeService;
import com.ken.forum_server.service.PostService;
import com.ken.forum_server.service.UserService;
import com.ken.forum_server.util.ConstantUtil;
import com.ken.forum_server.util.JsonUtil;
import com.ken.forum_server.util.JwtUtil;
import com.ken.forum_server.vo.PaginationVo;
import com.ken.forum_server.vo.PostVo;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController extends BaseController{

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    @Autowired
    private UserService userService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private FollowService followService;
    @Autowired
    private PostService postService;

    @Value("${qiniu.key.access}")
    private String accessKey;

    @Value("${qiniu.key.secret}")
    private String secretKey;

    @Value("${qiniu.bucket.avatar.name}")
    private String avatarBucketName;

    @Value("${qiniu.bucket.avatar.url}")
    private String avatarBucketUrl;


    /**
     *
     * @param user
     * @return 返回token信息，包含用户名及id
     */
    @TokenFree
    @RequestMapping("/login")
    public Result login(@RequestBody User user){
        return userService.login(user);
    }

    @TokenFree
    @RequestMapping("/register")
    public Result register(@RequestBody User user)
    {
        return userService.register(user);
    }


    @TokenFree
    @GetMapping("/active")
    public Result active(String username , String code)
    {
        return userService.active(username,code);
    }


    @RequestMapping("/test")
    public Result test(){
        return new Result();
    }

    @RequestMapping("/getInfo")
    public Result getInfo(HttpServletRequest request){
        String token = request.getHeader(JwtUtil.HEADER_TOKEN_KEY);
//        System.out.println("token  + " + token);
        String id = JwtUtil.getToken(token).getClaim("id").asString();
        return userService.getInfo(Integer.parseInt(id));
    }


    /**
     * 上传头像
     * @param file
     * @return
     * @throws IOException
     */
    @PostMapping("/avatar")
    public Result updateAvatar(MultipartFile file) throws IOException {

        //为文件生成随机名，这样更新头像的时候，文件名字不同，就不用担心缓存导致的头像没有变化
        String fileName = UUID.randomUUID().toString().replaceAll("-", "");

        //获取图片格式（后缀名）
        String originalFilename = file.getOriginalFilename();
        String suffix = originalFilename.substring(originalFilename.lastIndexOf(".")+1);

        //获取用户id
        int userId = getUserId(request);

        if (StringUtils.isEmpty(suffix)) {
           return new Result().fail("上传照片格式不对！");
        }

        //上传次数
        int uploadTimes = 0;

        //最多上传3次
        for ( uploadTimes = 1; uploadTimes <= 3; uploadTimes++) {
            logger.info(String.format("开始第%d次上传[%s].", uploadTimes, fileName));

            // 设置响应信息
            StringMap policy = new StringMap();
            //意思是上传成功后给我传0状态码
            policy.put("returnBody", JsonUtil.getJSONString(0));
            // 生成上传凭证
            Auth auth = Auth.create(accessKey, secretKey);
            String uploadToken = auth.uploadToken(avatarBucketName, fileName, 3600, policy);
            // 指定上传机房(华南)
            UploadManager manager = new UploadManager(new Configuration(Zone.huanan()));
            try {
                // 开始上传图片
                Response response = manager.put(
                        file.getBytes(), fileName, uploadToken, null, "image/" + suffix, false);
                // 处理响应结果
                JSONObject json = JSONObject.parseObject(response.bodyString());
                if (json == null || json.get("code") == null || !json.get("code").toString().equals("0")) {
                    logger.info(String.format("第%d次上传失败[%s].", uploadTimes, fileName));
                } else {
                    logger.info(String.format("第%d次上传成功[%s].", uploadTimes, fileName));
                    break;
                }
            } catch (QiniuException e) {
                logger.info(String.format("第%d次上传失败[%s].", uploadTimes, fileName));
            }
        }

        if (uploadTimes > 3){
            return new Result().fail("图片上传失败");
        }

        //修改数据库数据
        //avatarBucketUrl + "/" + fileName
        userService.upadteAvatar(userId,"http://"+avatarBucketUrl + "/" + fileName);
        //返回用户头像访问路径
        return new Result().success("http://"+avatarBucketUrl + "/" + fileName);

    }

    //弃用
    /**
     * 上传头像
     * @param
     * @return
     * @throws IOException
     */
    @PostMapping("/avatar")
/*
    public Result updateAvatar(MultipartFile file) throws IOException {
//        String filePath = "static/img/avatar/";

//        String filePath = "src/main/resources/static/img/avatar/";
        String filePath = "/usr/share/nginx/html/dist/img/avatar/";
        //获取用户id
        int userId = getUserId(request);

        //判断文件夹目录是否存在
        File targetFile = new File(filePath);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        String fileName = file.getOriginalFilename();
        String suffix = fileName.substring(fileName.lastIndexOf("."));
        if (StringUtils.isEmpty(suffix)) {
           return new Result().fail("上传照片格式不对！");
        }
        byte[] fileBytes = file.getBytes();
        FileOutputStream out = new FileOutputStream(filePath + userId+suffix);
        out.write(fileBytes);
        out.flush();
        out.close();
        //修改数据库数据
        userService.upadteAvatar(userId,userId+suffix);
        //返回用户头像名
        return new Result().success("/img/avatar/"+userId+suffix);

    }
*/




    /**
     * 用户主页，无须登录也可访问，根据用户id来访问
     * @return
     */
    @TokenFree
    @RequestMapping("/profile/{uid}")
    public Result userPage(@PathVariable(name = "uid") int uid,
                           HttpServletRequest request){

        User user = userService.findUserById(uid);
        if (user == null) {
            throw new CustomException(CustomExceptionCode.USER_NOT_EXIST);
        }

        //用request的token信息来判断是否是访问别人的主页还是自己的主页
        Map<String,Object> map = new HashMap<>();
        boolean isLogin = isLogin(request);
        if (isLogin && getUserId(request) == uid){
            map.put("isMine",true);
        }else {
            map.put("isMine",false);
        }

        // 点赞数量
        int likeCount = likeService.findUserLikeCount(uid);

        // 关注数量
        long followeeCount = followService.findFolloweeCount(uid, ConstantUtil.ENTITY_TYPE_USER);
        map.put("followeeCount", followeeCount);
        // 粉丝数量
        long followerCount = followService.findFollowerCount(ConstantUtil.ENTITY_TYPE_USER, uid);
        map.put("followerCount", followerCount);
        // 是否已关注
        boolean hasFollowed = false;
        if (isLogin) {
            hasFollowed = followService.hasFollowed(getUserId(request), ConstantUtil.ENTITY_TYPE_USER, uid);
        }
        map.put("hasFollowed", hasFollowed);
        map.put("user",user);
        map.put("likeCount",likeCount);

        return new Result().success(map);
    }

    /**
     *查询用户文章
     * @return
     */
    @TokenFree
    @GetMapping("/userPost/{uid}")
    public Result posts(@PathVariable(name = "uid") int uid,@RequestParam(defaultValue = "1") int currentPage){
        PaginationVo<PostVo> pagination = postService.listByUserId(currentPage,uid);
        Map<String,Object> map = new HashMap<>();
        map.put("pagination",pagination);
        User user = userService.findUserById(uid);
        map.put("user",user);
        return new Result().success(map);
    }





}
