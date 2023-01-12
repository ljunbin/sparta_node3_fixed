// repositories/posts.repository.js

const { Post } = require('../models');

class PostRepository {

  //게시글 전체조회
  findAllPost = async () => {
    const posts = await Post.findAll();

    return posts;
  }

  //게시글 하나조회
  findOnePost = async (postId) =>{
    const postOne = await Post.findByPk(postId);
    return postOne;
  }

  //게시글 생성
  createPost = async ({ title, content, nickname,  userId }) => {
    const createPostData = await Post.create({
      userId: userId,
      title: title,
      nickname: nickname,
      content:content,
      likes: 0
  });
    return createPostData;
  }
  
  //게시글 업데이트
  updatePost = async ({postId, title, content}) => {
    console.log("hi")
    console.log(postId)
    console.log(title)
    console.log(content)
    await Post.update({title:title, content:content,}, {where:{postId:postId}})

    return ;
  };

  //게시글 삭제
  deletePost = async (postId) => {
    await Post.destroy({where:{postId:postId}});

    return ;
  };
}



module.exports = PostRepository;