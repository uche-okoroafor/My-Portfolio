const Container = Vue.createApp({
  data() {
    return {
      indicatorList: [
        {
          isActive: "activeindicator",
          id: "#Intro",
          title: "Intro",
          linkId: "0",
        },
        { isActive: false, id: "#About", title: "About", linkId: "1" },
        { isActive: false, id: "#Projects", title: "Projects", linkId: "2" },
        { isActive: false, id: "#Somedia", title: "Project 1", linkId: "3" },
        {
          isActive: false,
          id: "#ContactManager",
          title: "Project 2",
          linkId: "4",
        },
        { isActive: false, id: "#MemoryGame", title: "Project 3", linkId: "5" },
        {
          isActive: false,
          id: "#TumblrcClone",
          title: "Project 4",
          linkId: "6",
        },
        { isActive: false, id: "#Footer", title: "Contact", linkId: "7" },
      ],
      backgrounds: [{ url: "assets/background-image/background1.webp" }],
      postedBy: [
        {
          artistName: "user",
          artistAvatar: "avatar",
        },
      ],
      menuBarOpen: false,
      zero: 100,
    };
  },

  mounted() {
    document
      .getElementById("container")
      .addEventListener("scroll", () => this.onScroll(this.$refs));
    this.handleBackgroundImage(this.backgrounds);
  },
  beforeUnmount() {
    document
      .getElementById("container")
      .removeEventListener("scroll", () => this.onScroll(this.$refs));
    this.handleBackgroundImage(this.backgrounds);
  },

  methods: {
    onScroll(ref) {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 100
      ) {
        console.log("yes");

        this.zero = document.body.scrollTop;
      } else {
        console.log("no");
      }

      this.isElementInViewport(ref.login) &&
        this.activeIndicator(this.indicatorList[0]);
      this.isElementInViewport(ref.About) &&
        this.activeIndicator(this.indicatorList[1]);
      this.isElementInViewport(ref.projects) &&
        this.activeIndicator(this.indicatorList[2]);
      this.isElementInViewport(ref.Somedia) &&
        this.activeIndicator(this.indicatorList[3]);
      this.isElementInViewport(ref.contactManager) &&
        this.activeIndicator(this.indicatorList[4]);
      this.isElementInViewport(ref.memoryGame) &&
        this.activeIndicator(this.indicatorList[5]);
      this.isElementInViewport(ref.tumblrClone) &&
        this.activeIndicator(this.indicatorList[6]);
      this.isElementInViewport(ref.footer) &&
        this.activeIndicator(this.indicatorList[7]);
    },

    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    activeIndicator(indicator) {
      this.indicatorList.forEach((indicatorIndex) => {
        if (indicatorIndex.title === indicator.title) {
          indicatorIndex.isActive = "activeindicator";
        } else {
          indicatorIndex.isActive = false;
        }
      });

      // document.querySelectorAll(".menu-contents")[0].classList.add("addBackground")

      document.querySelectorAll(".menu-contents").forEach((element) => {
        if (element.innerHTML === indicator.title) {
          // console.log(element.innerHTML, indicator.title);
          element.classList.add("addBackground");
        } else {
          // console.log(element.innerHTML, indicator.title);

          element.classList.remove("addBackground");
        }
      });

      document.getElementById(indicator.linkId).click();
      this.introDisplay(this.indicatorList);
      this.displayAboutMe(this.indicatorList);
      this.showProjects(this.indicatorList);
      this.handleSoMediaDisplay(this.indicatorList);
      this.handleContactManagerDisplay(this.indicatorList);
      this.handleMemoryGameDisplay(this.indicatorList);
      this.handleTumblrDisplay(this.indicatorList);
      this.handleMediaIconPop(this.indicatorList);
    },

    handleActiveIndicator(indicator) {
      if (!indicator.isActive) {
        return "";
      }

      return "display:inline;opacity:1;text-shadow: -4px 3px 3px rgba(0, 0, 0, 0.43);";
      // "color:#00cf35"
    },

    handleSearchInput() {
      document.getElementsByClassName("searchInput").style =
        "background-color: rgba(253, 254, 255,1);";
    },

    introDisplay(indicator) {
      let timer = 0;
      if (indicator[0].isActive.length) {
        setTimeout(() => {
          document
            .querySelectorAll(".display-Intro-Text")
            .forEach((element) => {
              setTimeout(() => {
                element.style =
                  "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1s;padding-top:0;";
              }, (timer += 200));
            });
        }, 800);
      } else {
        document.querySelectorAll(".display-Intro-Text").forEach((element) => {
          element.style = "opacity:0;padding-top:5rem;";
        });
      }
    },

    displayAboutMe(indicator) {
      let timer = 0;
      if (indicator[1].isActive.length) {
        this.$refs.photoBig.style =
          "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:0% ";

        setTimeout(() => {
          document.querySelectorAll(".display-text").forEach((element) => {
            //  setTimeout(() => {
            //         element.style =
            //           "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1s;padding-top:0;";
            //       },(timer += 200));

            setTimeout(() => {
              element.style = "opacity:1;transition: ease-in 1s;";
            }, 300);
          });
        }, 800);
      } else {
        this.$refs.photoBig.style = "opacity:0;right:120%;padding-top:0rem;";
        // this.$refs.text1.style = "opacity:0;bottom: 68%;right:-50%;";

        document.querySelectorAll(".display-text").forEach((element) => {
          element.style = "opacity:0;padding-top:0rem;";
        });
      }
    },

    showProjects(indicator) {
      this.$refs.hoverControl.style = "display:block";
      this.$refs.projectsContainer.style = "display:flex";
      setTimeout(() => {
        if (indicator[2].isActive.length) {
          this.$refs.projectsContainer.style =
            "margin-top:0rem;transition:cubic-bezier(.165,.84,.44,1) 1s";
          this.$refs.img1.style =
            "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;";

          setTimeout(() => {
            this.$refs.img2.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 5%;top: 150%;";
          }, 300);

          setTimeout(() => {
            this.$refs.img3.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 10%;top:210%;";
          }, 600);
          setTimeout(() => {
            this.$refs.img4.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 15%;top:260%;";
          }, 800);
          setTimeout(() => {
            this.$refs.img2Mobileview.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top: 400%;";
          }, 300);

          setTimeout(() => {
            this.$refs.img3Mobileview.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top:700%;";
          }, 600);
          setTimeout(() => {
            this.$refs.img4Mobileview.style =
              "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top:1000%;";
          }, 800);
          setTimeout(() => {
            this.$refs.projectsText.style = "opacity:1;transition: opacity 2s";
          }, 1500);
          setTimeout(() => {
            this.$refs.hoverControl.style = "display:none";
          }, 2000);
        } else {
          this.$refs.projectsContainer.style = "margin-top:20rem";
          this.$refs.img1.style = "opacity:0;bottom: 68%;right:-50%;";
          this.$refs.img2.style = "opacity:0;left:100%";
          this.$refs.img3.style = "opacity:0;left:100%";
          this.$refs.img4.style = "opacity:0;left:100%";
          this.$refs.img2Mobileview.style = "opacity:0;left:100%";
          this.$refs.img3Mobileview.style = "opacity:0;left:100%";
          this.$refs.img4Mobileview.style = "opacity:0;left:100%";
          this.$refs.hoverControl.style = "display:block";
          this.$refs.projectsText.style = "opacity:0";
          setTimeout(() => {
            this.$refs.projectsContainer.style = "display:none";
          }, 100);
        }
      }, 500);
    },

    handleSoMediaDisplay(indicator) {
      if (indicator[3].isActive.length) {
        this.$refs.SomediaImg.style =
          "margin-top:0;margin-left:-50rem;margin-right:50rem;opacity:1 ;transition: all ease-out 0.7s";
        setTimeout(() => {
          this.$refs.somediaText.style =
            "opacity:1 ;margin-left:0rem;margin-right:0rem;transition: all ease-out 0.7s";
          this.$refs.SomediaImg.style =
            "margin-left:0;margin-right:0rem;opacity:1 ;transition: all ease-out 0.7s";
        }, 700);
        // console.log(document.querySelectorAll(".somedia-Text-Mobile"));
        setTimeout(() => {
          document.querySelector("#Somedia .image-box-mobile").style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/somedia2.jpg');";
          // document.querySelector("#Somedia .image-box-mobile img").style =
          //   "visibility:visible;transition: all ease-out 0.7s";
        }, 500);

        setTimeout(() => {
          document
            .querySelectorAll(".somedia-Text-Mobile")
            .forEach((element) => {
              element.style = "opacity:1;transition: all ease-out 1s";
            });

        }, 1200);

        setTimeout(() => {
          document.querySelector("#Somedia .image-box-mobile").style =
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/somedia2.jpg');";        
}, 2000);
      } else {
        this.$refs.SomediaImg.style =
          "margin-top:40rem; margin-left:-50rem;opacity:0;margin-right:50rem;";
        this.$refs.somediaText.style =
          "opacity:0 ;margin-left:50rem;margin-right:-50rem";

        document.querySelector("#Somedia .image-box-mobile").style =
          "opacity:0;";

        document.querySelectorAll(".somedia-Text-Mobile").forEach((element) => {
          element.style = "opacity:0";
        });
      }
    },

    handleContactManagerDisplay(indicator) {
      if (indicator[4].isActive.length) {
        this.$refs.contactManagerImg.style =
          "opacity:1 ;margin-left:50rem;margin-top:0;transition: all ease-out 0.7s";

        setTimeout(() => {
          this.$refs.contactManagerText.style =
            "margin-top:0;opacity:1 ;transition: all ease-out 0.7s";
          this.$refs.contactManagerImg.style =
            "opacity:1 ;margin-left:0;transition: all ease-out 0.7s";
        }, 700);

 setTimeout(() => {
          document.querySelector("#ContactManager .image-box-mobile").style =
          "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/contactManagerPic.png');";
          // document.querySelector("#ContactManager .image-box-mobile img").style =
          //   "visibility:visible;transition: all ease-out 0.7s";
        }, 500);

        setTimeout(() => {
          document
            .querySelectorAll(".contactManager-Text-Mobile")
            .forEach((element) => {
              element.style = "opacity:1;transition: all ease-out 0.7s";
            });
        }, 1200);
 setTimeout(() => {
          document.querySelector("#ContactManager .image-box-mobile").style = 
 "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/contactManagerPic.png');";
        }, 2000);
      } else {
        this.$refs.contactManagerText.style = "margin-top:40rem;opacity:0";
        this.$refs.contactManagerImg.style =
          "opacity:0;margin-left:50rem;margin-top:50rem";
        document
          .querySelectorAll(".contactManager-Text-Mobile")
          .forEach((element) => {
            element.style = "opacity:0;transition: all ease-out 0.7s";
          });
 document.querySelector("#ContactManager .image-box-mobile").style =
          "opacity:0;";
      }
    },

    handleMemoryGameDisplay(indicator) {
      if (indicator[5].isActive.length) {
        this.$refs.MemoryGameImg.style =
          "margin-top:0;margin-left:-50rem; margin-right:50rem;opacity:1 ;transition: all ease-out 0.7s";
        setTimeout(() => {
          this.$refs.MemoryGameText.style =
            "opacity:1 ;margin-top:130px;transition: all ease-out 0.7s";
          this.$refs.MemoryGameImg.style =
            "margin-left:0;opacity:1 ;margin-right:0rem;transition: all ease-out 0.7s";
        }, 700);

   setTimeout(() => {
          document.querySelector("#MemoryGame .image-box-mobile").style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/memoryGame.jpg');";
          // document.querySelector("#MemoryGame .image-box-mobile img").style =
          //   "visibility:visible;transition: all ease-out 0.7s";
        }, 500);


        setTimeout(() => {
          document
            .querySelectorAll(".MemoryGame-Text-Mobile")
            .forEach((element) => {
              element.style = "opacity:1;transition: all ease-out 0.7s";
            });
        }, 1200);

 setTimeout(() => {
          document.querySelector("#MemoryGame .image-box-mobile").style = 
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/memoryGame.jpg');";        
        }, 2000);

      } else {
        this.$refs.MemoryGameImg.style =
          "margin-top:40rem; margin-left:-50rem;margin-right:50rem;opacity:0";
        this.$refs.MemoryGameText.style = "opacity:0 ;margin-top:-50rem";
        document
          .querySelectorAll(".MemoryGame-Text-Mobile")
          .forEach((element) => {
            element.style = "opacity:0;transition: all ease-out 0.7s";
          });

   document.querySelector("#MemoryGame .image-box-mobile").style =
          "opacity:0;";
      }
    },

    handleTumblrDisplay(indicator) {
      if (indicator[6].isActive.length) {
        this.$refs.tumblrcloneImg.style =
          "margin-top:0;margin-left:50rem;opacity:1 ;transition: all ease-out 0.7s";
        setTimeout(() => {
          this.$refs.tumblrcloneText.style =
            "opacity:1 ;margin-left:0rem;margin-right:0rem;transition: all ease-out 0.7s";
          this.$refs.tumblrcloneImg.style =
            "margin-left:0;opacity:1 ;transition: all ease-out 0.7s";
        }, 700);

  setTimeout(() => {
          document.querySelector("#TumblrcClone .image-box-mobile").style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/tumblrImg1.png');";
          // document.querySelector("#TumblrcClone .image-box-mobile img").style =
          //   "visibility:visible;transition: all ease-out 0.7s";
        }, 500);

        setTimeout(() => {
          document
            .querySelectorAll(".tumblrclone-Text-Mobile")
            .forEach((element) => {
              element.style = "opacity:1;transition: all ease-out 0.7s";
            });
        }, 1200);

 setTimeout(() => {
          document.querySelector("#TumblrcClone .image-box-mobile ").style = 
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/tumblrImg1.png');";        
        }, 2000);

      } else {
        this.$refs.tumblrcloneImg.style =
          "margin-left:50rem; margin-top:50rem;opacity:0";
        this.$refs.tumblrcloneText.style =
          "opacity:0 ;margin-left:-50rem;margin-right:50rem";
        document
          .querySelectorAll(".tumblrclone-Text-Mobile")
          .forEach((element) => {
            element.style = "opacity:0;transition: all ease-out 0.7s";
          });

 document.querySelector("#TumblrcClone .image-box-mobile").style =
          "opacity:0;";
      }
    },

    //  this.handleContactManagerDisplay(this.indicatorList);
    //       this.handleMemoryGameDisplay(this.indicatorList);
    //       this.handleTumblrDisplay(this.indicatorList);
    handleMediaIconPop(indicator) {
      let timer = 0;
      if (indicator[7].isActive.length) {
        document.querySelectorAll(".iconContainer").forEach((icon) => {
          setTimeout(() => {
            icon.style =
              "opacity:1;transform:scale(1,1);transition: transform 1s cubic-bezier(.165,.84,.44,1);";
          }, (timer += 150));
        });
        setTimeout(() => {
          this.$refs.footerText1.style = "opacity:1;transition: opacity 1.5s";
          setTimeout(() => {
            this.$refs.footerText2.style = "opacity:1;transition: opacity 1.5s";
          }, 700);
        }, 1500);
      } else {
        document.querySelectorAll(".iconContainer").forEach((icon) => {
          icon.style = "opacity:0;transform:scale(0.5,0.5)";
        });
        this.$refs.footerText1.style = "opacity:0";
        this.$refs.footerText2.style = "opacity:0";
      }
    },

    handleBackgroundImage(backgrounds) {
      this.introDisplay(this.indicatorList);

      let num = Math.floor(Math.random() * backgrounds.length);
      this.$refs.login.style =
        "background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(" +
        backgrounds[num].url +
        ")";

      // background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url("https://i.guim.co.uk/img/media/2abe5a9bee5769168843fc873d39aa2696a7cc0d/0_139_4467_2681/master/4467.jpg?width=1920&quality=85&auto=format&fit=max&s=a8c43e81775114404286ffd675453f7f");

      this.$refs.footer.style =
        "background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(" +
        backgrounds[num].url +
        ")";
      // this.postedBy[0].artistAvatar = backgrounds[num].avatar;
      // this.postedBy[0].artistName = backgrounds[num].name;
      setInterval(() => {
        let num = Math.floor(Math.random() * backgrounds.length);
        this.$refs.login.style =
          "background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(" +
          backgrounds[num].url +
          ")";
        this.$refs.footer.style =
          "background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(" +
          backgrounds[num].url +
          ")";
        // this.postedBy[0].artistAvatar = backgrounds[num].avatar;
        // this.postedBy[0].artistName = backgrounds[num].name;
      }, 10000);
    },
    handleMenuBar(params) {
      let timer = 0;
      if (params === "open") {
        this.$refs.menuContainer.style =
          " width: min(75vw, 400px);transition: width 1s cubic-bezier(.165,.84,.44,1);padding:20px;";
        setTimeout(() => {
          document.querySelectorAll(".menu-contents").forEach((content) => {
            setTimeout(() => {
              content.style =
                "margin-left:0;transition: all 1s cubic-bezier(.165,.84,.44,1)";
            }, (timer += 150));
          });

          //  for(let content in  document.getElementsByClassName("menu-contents")){

          // setTimeout(() => {
          //      document.getElementsByClassName("menu-contents")[content].style="margin-left:0;transition: all 1s cubic-bezier(.165,.84,.44,1)";

          // }, 1000);
          //   }
        }, 100);
        this.menuBarOpen = true;
      } else {
        this.$refs.menuContainer.style =
          "width:0%;transition: width 0.5s cubic-bezier(.165,.84,.44,1);";
        this.menuBarOpen = false;

        document.querySelectorAll(".menu-contents").forEach((content) => {
          setTimeout(() => {
            content.style =
              "margin-left:150%;transition: all 1s cubic-bezier(.165,.84,.44,1)";
          }, (timer += 150));
        });
      }
    },
  },
});

Container.mount("#container");
