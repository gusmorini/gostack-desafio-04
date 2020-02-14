import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "He-Man",
          avatar: "data:image/jpeg;base64,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"
        },
        date: "20 Fev 2020",
        content: "Atenção você que posta “Me alugo no dia dos namorados”. Sabia que algumas mulheres fazem esse tipo de anúncio durante o ano todo? Aliás, essa é uma das profissões mais antigas da história",
        comments: [
          {
            id: 1,
            author: {
              name: "Esqueleto",
              avatar: "https://pbs.twimg.com/profile_images/864550011404562432/Kfi8By2Q_400x400.jpg"
            },
            content: "A minha vida mudou de modo significativo, depois que eu bloqueei os convites para Farmville e CandyCrush. Hoje sou um novo homem. Experimente você também"
          },
          {
            id: 2,
            author: {
              name: "Feiticeira",
              avatar: "https://mundohq.com.br/imagens/201600321_feiticeira_d008.jpg"
            },
            content: "Quando você ver um casal se beijando em público grite: “Eu sabia que você estava me traindo!” e saia correndo chorando"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gorpo",
          avatar: "https://pbs.twimg.com/profile_images/1095880404807102464/1L4etOjv_400x400.jpg"
        },
        date: "13 Fev 2020",
        content: "Você que pensa em arrumar um namorado neste inverno, só pra se aquecer no frio: Compre um aquecedor que sairá muito mais barato. Um namoro sai bem mais caro.",
      },
      {
        id: 3,
        author: {
          name: "Mentor",
          avatar: "https://pbs.twimg.com/media/C1c0RU-WIAAkFMU.jpg"
        },
        date: "17 Fev 2013",
        content: "Menina, não se orgulhe ter muitos caras atrás de você. Lembre-se que preço baixo sempre atraem muitos clientes",
        comments: [
          {
            id: 1,
            author: {
              name: "Trikilops",
              avatar: "https://4.bp.blogspot.com/-PAIpuIsXIBo/WidHM6wLrwI/AAAAAAAACog/xeK4qp_YyiY4uiQZlsXOI69VaW_cXcURQCEwYBhgL/s640/Triklops_HeMan.jpg"
            },
            content: "Você vive dizendo que só aceita lavar roupa se for naquela barriga de tanquinho? Cuidado, boa parte desses tanquinhos só aceitam cuecas"
          },
        ],
      }
    ]
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="postlist">
            {
              this.state.posts.map(post => <Post key={post.id} data={post} />)
            }
          </div>
        </div>
      </>
    );
  }

}

export default PostList;

// import Comment from './Comment';

// function PostList() {

//   return (<div className="container">
//     <div className="main">
//       <Comment />
//       <Comment />
//       <Comment />
//     </div>
//   </div>)

// }

// export default PostList;