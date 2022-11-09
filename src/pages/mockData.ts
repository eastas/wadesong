export const sigle_list = [
  {
    name: "牛奶果色西服上衣",
    type: "g",
    tao: "xifu",
    sex: "man",
    price: 258,
    imgSrc: "xifu/yi.jpg",
  },
  {
    name: "黄绿撞色棉服",
    type: "g",
    tao: "aozi",
    sex: "man",
    price: 280,

    imgSrc: "aozi/yi.jpg",
  },
  {
    name: "米色条纹西装裤",
    type: "g",
    tao: "xifu",
    sex: "man",
    price: 159,

    imgSrc: "xifu/ku.jpg",
  },
  
  {
    name: "印花牛仔裤",
    type: "g",
    tao: "aozi",
    sex: "man",
    price: 128,

    imgSrc: "aozi/ku.jpg",
  },

  {
    name: "紫色手套",
    type: "g",
    tao: "xifu",
    sex: "man",
    price: 39,
    imgSrc: "xifu/soutao.jpg",
  },


  {
    name: "撞色针织马甲",
    type: "t",
    tao: "jazz",
    sex: "man",
    price: 118,

    imgSrc: "jazz/yi.jpg",
  },
  {
    name: "粉色字母印花卫衣",
    type: "t",
    tao: "weiyi",
    sex: "man",
    price: 168,

    imgSrc: "weiyi/yi.jpg",
  },
  {
    name: "灰绿色工装裤",
    type: "t",
    tao: "jazz",
    sex: "man",
    price: 238,
    imgSrc: "jazz/ku.jpg",
  },
  {
    name: "灰粉撞色冲锋裤",
    type: "t",
    tao: "weiyi",
    sex: "man",
    price: 219,

    imgSrc: "weiyi/ku.jpg",
  },
 
 
  
];


export const tao_list = [
    {
      name: "西服",
      type: "g",
      istao: true,
      sex: "man",
      imgSrc: "xifu/xifu.jpg",
      commpont:sigle_list.filter(item=>item.tao==='xifu') ,
    },
  
    {
      name: "袄子",
      type: "g",
      value:'aozi',
      istao: true,
      sex: "man",
      imgSrc: "aozi/aozi.jpg",
      commpont:sigle_list.filter(item=>item.tao==='aozi') ,
    },
    {
      name: "牛仔",
      type: "t",
      istao: true,
      sex: "man",
      imgSrc: "jazz/tao.jpg",
      commpont:sigle_list.filter(item=>item.tao==='jazz') ,
    },
  
    {
      name: "卫衣",
      type: "t",
      istao: true,
      sex: "man",
      imgSrc: "weiyi/wyi.jpg",
      commpont:sigle_list.filter(item=>item.tao==='weiyi') ,
    },
  ];