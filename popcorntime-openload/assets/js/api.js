var movieApp = angular.module('movieApp', ['ngRoute']);  
     movieApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: './views/movies.html',
            controller: 'movieListCtrl',
          }).
          when('/series', {
            templateUrl: './views/series.html',
            controller: 'seriesListCtrl',
          }).
          when('/search/:movieSearch', {
            templateUrl: './views/search.html',
            controller: 'movieSearchCtrl'
          }).
          when('/searchtv/:tvSearch', {
            templateUrl: './views/searchtv.html',
            controller: 'movieSearchCtrl'
          }).
          when('/genre/:movieGenre', {
            templateUrl: './views/Genre.html',
            controller: 'movieGenreCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
    });
    movieApp.controller('movieListCtrl', function ($scope, $http){
        $http.get('https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/popular.json').success(function(movies) {
          $scope.movies = movies;
          document.getElementById("search_input").value = "";
           document.getElementById("menu_title").innerHTML = "Popular";
            document.getElementById("toolbar_tv").className = "toolbar_btn clickable bold section_indicator";
            document.getElementById("toolbar_genres").className = "toolbar_btn clickable bold section_indicator";
           document.getElementById("toolbar_movies").className = "toolbar_btn clickable bold section_indicator activated";
          }).error(function (response, status) {
          console.log(response);    
        });
    });
    movieApp.controller('movieSearchCtrl', function ($scope, $http, $routeParams, $window){
        $http.get('https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/list.json').success(function(movies) {
          $scope.movies = movies;
          if($routeParams.movieSearch=="Arrow")
          {
            if($routeParams.tvSearch==null)
            {
              var search = $routeParams.movieSearch;
              $window.location.href = '#/searchtv/' + search;
            }
          }
          else
          {
            if($routeParams.tvSearch==null)
            {
              $scope.isearch = $routeParams.movieSearch;
            }
            else
            {
              $scope.isearch = $routeParams.tvSearch;
            }
          };
         document.getElementById("menu_title").innerHTML = "Pesquisando";
          }).error(function (response, status) {
          console.log(response);    
        });
    });
    movieApp.controller('seriesListCtrl', function ($scope, $http){
        $http.get('https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/popular-tv.json').success(function(movies) {
          $scope.movies = movies;
          document.getElementById("search_input").value = "";
          document.getElementById("toolbar_movies").className = "toolbar_btn clickable bold section_indicator";
          document.getElementById("toolbar_genres").className = "toolbar_btn clickable bold section_indicator";
          document.getElementById("toolbar_tv").className = "toolbar_btn clickable bold section_indicator activated";
           
          }).error(function (response, status) {
          console.log(response);    
        });
    });
    movieApp.controller('movieGenreCtrl', function ($scope, $http, $routeParams){
        $http.get('https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/list.json').success(function(movies) {
          $scope.genre = $routeParams.movieGenre
          $scope.movies = movies;
          document.getElementById("search_input").value = "";
          document.getElementById("toolbar_movies").className = "toolbar_btn clickable bold section_indicator";
          document.getElementById("toolbar_tv").className = "toolbar_btn clickable bold section_indicator";
          document.getElementById("toolbar_genres").className = "toolbar_btn clickable bold section_indicator activated";
          if($routeParams.movieGenre=="popular")
          {
            document.getElementById("menu_title").innerHTML = "Popular";
          }
          if($routeParams.movieGenre=="action")
          {
            document.getElementById("menu_title").innerHTML = "Ação";
          }
          if($routeParams.movieGenre=="adventure")
          {
            document.getElementById("menu_title").innerHTML = "Aventura";
          }
          if($routeParams.movieGenre=="animation")
          {
            document.getElementById("menu_title").innerHTML = "Animação";
          }
          if($routeParams.movieGenre=="biography")
          {
            document.getElementById("menu_title").innerHTML = "Biografia";
          }
          if($routeParams.movieGenre=="comedy")
          {
            document.getElementById("menu_title").innerHTML = "Comédia";
          }
          if($routeParams.movieGenre=="crime")
          {
            document.getElementById("menu_title").innerHTML = "Crime";
          }
          if($routeParams.movieGenre=="documentary")
          {
            document.getElementById("menu_title").innerHTML = "Documentário";
          }
          if($routeParams.movieGenre=="drama")
          {
            document.getElementById("menu_title").innerHTML = "Comédia";
          }
          if($routeParams.movieGenre=="fantasy")
          {
            document.getElementById("menu_title").innerHTML = "Fantasia";
          }
          if($routeParams.movieGenre=="history")
          {
            document.getElementById("menu_title").innerHTML = "História";
          }
          if($routeParams.movieGenre=="horror")
          {
            document.getElementById("menu_title").innerHTML = "Terror";
          }
          if($routeParams.movieGenre=="music")
          {
            document.getElementById("menu_title").innerHTML = "Música";
          }
          if($routeParams.movieGenre=="mystery")
          {
            document.getElementById("menu_title").innerHTML = "Mistério";
          }
          if($routeParams.movieGenre=="romance")
          {
            document.getElementById("menu_title").innerHTML = "Romance";
          }
          if($routeParams.movieGenre=="sci-fi")
          {
            document.getElementById("menu_title").innerHTML = "Ficção Científica";
          }
          if($routeParams.movieGenre=="short")
          {
            document.getElementById("menu_title").innerHTML = "Curta";
          }
          }).error(function (response, status) {
          console.log(response);    
        });
      });
    movieApp.controller('movieShow', function ($scope, $http, $sce){
       $scope.showMovie = function(movieID) {        
        var url = 'https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/'+ movieID +'.json';
        $http.get(url).success(function(movies) {
          $scope.get = movies;
          var movie = movies[0];
        $scope.embed_br = $sce.trustAsResourceUrl(movie.embed[0].br);
        $scope.embed_en = $sce.trustAsResourceUrl(movie.embed[0].en);
        $scope.youtube = $sce.trustAsResourceUrl(movie.youtube);
        }).error(function (response, status) {
          console.log(response);    
        });
      }
      $scope.showSerie = function(SerieID) {        
        var url = 'https://rsr06468.github.io/rsr06468/popcorntime-openload/public/json/'+ SerieID +'.json';
        $http.get(url).success(function(series) {
        var serie = series[0];
        $scope.title = serie.title;
        $scope.year = serie.year;
        $scope.rating = serie.rating;
        $scope.runtime = serie.runtime;
        $scope.genre = serie.genre;
        $scope.imdb = serie.imdb;
        $scope.poster_l = serie.poster_l;
        $scope.description = serie.description;
        $scope.youtubes = $sce.trustAsResourceUrl(serie.youtube);
        var season = serie.season[0];
        if(serie.overview=='1')
        {
          document.getElementById("season_select").innerHTML = '<option value="1">1ª temporada</option>';
          if(serie.overview=='2')
          {
            document.getElementById("season_select").innerHTML += '<option value="2">2ª temporada</option>';
            if(serie.overview=='3')
            {
              document.getElementById("season_select").innerHTML += '<option value="3">3ª temporada</option>';
              if(serie.overview=='4')
              {
                document.getElementById("season_select").innerHTML += '<option value="4">4ª temporada</option>';
                if(serie.overview=='5')
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        else
        {
          document.getElementById("season_select").innerHTML = '<option value="1">1ª temporada</option>';
          if(serie.overview=='2')
          {
            document.getElementById("season_select").innerHTML += '<option value="2">2ª temporada</option>';
            if(serie.overview=='3')
            {
              document.getElementById("season_select").innerHTML += '<option value="3">3ª temporada</option>';
              if(serie.overview=='4')
              {
                document.getElementById("season_select").innerHTML += '<option value="4">4ª temporada</option>';
                if(serie.overview=='5')
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          else
          {
            document.getElementById("season_select").innerHTML += '<option value="2">2ª temporada</option>';
            if(serie.overview=='3')
            {
              document.getElementById("season_select").innerHTML += '<option value="3">3ª temporada</option>';
              if(serie.overview=='4')
              {
                document.getElementById("season_select").innerHTML += '<option value="4">4ª temporada</option>';
                if(serie.overview=='5')
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            else
            {
              document.getElementById("season_select").innerHTML += '<option value="3">3ª temporada</option>';
              if(serie.overview=='4')
              {
                document.getElementById("season_select").innerHTML += '<option value="4">4ª temporada</option>';
                if(serie.overview=='5')
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
              else
              {
                document.getElementById("season_select").innerHTML += '<option value="4">4ª temporada</option>';
                if(serie.overview=='5')
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                }
                else
                {
                  document.getElementById("season_select").innerHTML += '<option value="5">5ª temporada</option>';
                  if(serie.overview=='6')
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                  }
                  else
                  {
                    document.getElementById("season_select").innerHTML += '<option value="6">6ª temporada</option>';
                    if(serie.overview=='7')
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                    }
                    else
                    {
                      document.getElementById("season_select").innerHTML += '<option value="7">7ª temporada</option>';
                      if(serie.overview=='8')
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                      }
                      else
                      {
                        document.getElementById("season_select").innerHTML += '<option value="8">8ª temporada</option>';
                        if(serie.overview=='9')
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                            
                          }
                        }
                        else
                        {
                          document.getElementById("season_select").innerHTML += '<option value="9">9ª temporada</option>';
                          if(serie.overview=='10')
                          {
                            document.getElementById("season_select").innerHTML += '<option value="10">10ª temporada</option>';
                          }
                          else
                          {
                            document.getElementById("season_select").innerHTML += '<option value="11">Em Breve</option>';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if(serie.overview=="1")
        {
          var u = season.one[0];
          $scope.ones = u.episodes;
        }
        if(serie.overview=="2")
        {
          var u = season.one[0];
          var d = season.two[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
        }
        if(serie.overview=="3")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
        }
        if(serie.overview=="4")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fours = q.episodes;
        }
        if(serie.overview=="5")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
        }
        if(serie.overview=="6")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          var s = season.six[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
          $scope.sixs = s.episodes;
        }
        if(serie.overview=="7")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          var s = season.six[0];
          var st = season.seven[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
          $scope.sixs = s.episodes;
          $scope.sevens = st.episodes;
        }
        if(serie.overview=="8")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          var s = season.six[0];
          var st = season.seven[0];
          var o = season.eight[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
          $scope.sixs = s.episodes;
          $scope.sevens = st.episodes;
          $scope.eights = o.episodes;
        }
        if(serie.overview=="9")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          var s = season.six[0];
          var st = season.seven[0];
          var o = season.eight[0];
          var n = season.nine[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
          $scope.sixs = s.episodes;
          $scope.sevens = st.episodes;
          $scope.eights = o.episodes;
          $scope.nines = n.episodes;
        }
        if(serie.overview=="10")
        {
          var u = season.one[0];
          var d = season.two[0];
          var t = season.three[0];
          var q = season.four[0];
          var c = season.fifth[0];
          var s = season.six[0];
          var st = season.seven[0];
          var o = season.eight[0];
          var n = season.nine[0];
          var ten = season.nine[0];
          $scope.ones = u.episodes;
          $scope.twos = d.episodes;
          $scope.threes = t.episodes;
          $scope.fifths = c.episodes;
          $scope.sixs = s.episodes;
          $scope.sevens = st.episodes;
          $scope.eights = o.episodes;
          $scope.nines = n.episodes;
          $scope.nines = ten.episodes;
        }        
       }).error(function (response, status) {
          console.log(response);    
        });
      }
      $scope.ep = function(ep, title, description, adfly, embed_br, embed_en) {

        var id = "epselct-" + ep;
        document.getElementById(id).className += " activated";
        if(ep!=1)
        {
          document.getElementById("epselct-1").className = "episode";
        }
        if(ep!=2)
        {
          document.getElementById("epselct-2").className = "episode";
        }
        if(ep!=3)
        {
          document.getElementById("epselct-3").className = "episode";
        }
        if(ep!=4)
        {
          document.getElementById("epselct-4").className = "episode";
        }
        if(ep!=5)
        {
          document.getElementById("epselct-5").className = "episode";
        }
        if(ep!=6)
        {
          document.getElementById("epselct-6").className = "episode";
        }
        if(ep!=7)
        {
          document.getElementById("epselct-7").className = "episode";
        }
        if(ep!=8)
        {
          document.getElementById("epselct-8").className = "episode";
        }
        if(ep!=9)
        {
          document.getElementById("epselct-9").className = "episode";
        }
        if(ep!=10)
        {
          document.getElementById("epselct-10").className = "episode";
        }
        if(ep!=11)
        {
          document.getElementById("epselct-11").className = "episode";
        }
        if(ep!=12)
        {
          document.getElementById("epselct-12").className = "episode";
        }
        if(ep!=13)
        {
          document.getElementById("epselct-13").className = "episode";
        }
        if(ep!=14)
        {
          document.getElementById("epselct-14").className = "episode";
        }
        if(ep!=15)
        {
          document.getElementById("epselct-15").className = "episode";
        }
        if(ep!=16)
        {
          document.getElementById("epselct-16").className = "episode";
        }
        if(ep!=17)
        {
          document.getElementById("epselct-17").className = "episode";
        }
        if(ep!=18)
        {
          document.getElementById("epselct-18").className = "episode";
        }
        if(ep!=19)
        {
          document.getElementById("epselct-19").className = "episode";
        }
        if(ep!=20)
        {
          document.getElementById("epselct-20").className = "episode";
        }
        if(ep!=21)
        {
          document.getElementById("epselct-21").className = "episode";
        }
        if(ep!=22)
        {
          document.getElementById("epselct-22").className = "episode";
        }
        if(ep!=23)
        {
          document.getElementById("epselct-23").className = "episode";
        }
        if(ep!=24)
        {
          document.getElementById("epselct-24").className = "episode";
        }
        if(ep!=25)
        {
          document.getElementById("epselct-25").className = "episode";
        }
        if(ep!=26)
        {
          document.getElementById("epselct-26").className = "episode";
        }
        if(ep!=27)
        {
          document.getElementById("epselct-27").className = "episode";
        }
        if(ep!=28)
        {
          document.getElementById("epselct-28").className = "episode";
        }
        if(ep!=29)
        {
          document.getElementById("epselct-29").className = "episode";
        }
        if(ep!=30)
        {
          document.getElementById("epselct-30").className = "episode";
        }
        document.getElementById("watch_show").style.display = "inline";
        document.getElementById("watch_wrapper_s_br").innerHTML = '<iframe src="' + embed_br + '" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
        document.getElementById("watch_wrapper_s_en").innerHTML = '<iframe src="' + embed_en + '" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
        document.getElementById("ep_title").innerHTML = title;
        document.getElementById("ep_description").innerHTML = description;
        document.getElementById("ep_adfly").href = adfly;

      }
      
    });
   movieApp.controller('movieSearch', function ($scope, $window){
        $scope.ngsearch = function() {
        $window.location.href = '#/search/' + $scope.search;
        }
    });

   
