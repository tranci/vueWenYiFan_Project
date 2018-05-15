
var host = "";

var urlPrefix = "http://127.0.0.1/project/artist/api/public/";
var imagePrefix = "http://127.0.0.1/project/artist/api/";

var mainListUrl = "data/main.json";
mainListUrl = urlPrefix+"index.php?m=main&a=list";

var carouselUrl = urlPrefix+"index.php?m=main&a=carousel";

var readListUrl = "data/read.json";
readListUrl = urlPrefix+"index.php?m=read&a=list";

var readDetailUrl = "data/readDetail.json";
readDetailUrl = urlPrefix+"index.php?m=read&a=detail";


var musicListUrl = "data/music.json";
musicListUrl = urlPrefix+"index.php?m=music&a=list";

var musicDetailUrl = "data/musicDetail.json";
musicDetailUrl = urlPrefix+"index.php?m=music&a=detail";

var movieListUrl = "data/movie.json";
movieListUrl = urlPrefix+"index.php?m=movie&a=list";

var movieDetailUrl = "data/movieDetail.json";
movieDetailUrl = urlPrefix+"index.php?m=movie&a=detail";

//index.php?m=user&a=login&username=zz&password=21212
var loginUrl = urlPrefix+"index.php?m=user&a=login";

//收藏
//index.php?m=favorite&a=getFavorite&userId=1&type=1   阅读
//index.php?m=favorite&a=getFavorite&userId=1&type=4   音乐
//index.php?m=favorite&a=getFavorite&userId=1&type=5   影视
var getFavoriteUrl = urlPrefix+"index.php?m=favorite&a=getFavorite";

//index.php?m=favorite&a=saveFavorite&userId=6&itemId=1&type=1
var saveFavoriteUrl = urlPrefix+"index.php?m=favorite&a=saveFavorite";

//index.php?m=favorite&a=cancelFavorite&userId=6&itemId=1&type=1
var cancleFavoriteUrl = urlPrefix+"index.php?m=favorite&a=cancelFavorite";


//index.php?m=search&a=search&userId=1&keyword=121
var searchUrl = urlPrefix+"index.php?m=search&a=search";

