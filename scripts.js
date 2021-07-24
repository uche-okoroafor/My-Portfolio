const Container = Vue.createApp({
  data() {
    return {
      indicatorList: [
        { isActive: "activeindicator", id: "#login", linkId: "0" },
        { isActive: false, id: "#About", linkId: "1" },
        { isActive: false, id: "#Blogs", linkId: "2" },
        { isActive: false, id: "#Somedia", linkId: "3" },
        { isActive: false, id: "#contactManager", linkId: "4" },
        { isActive: false, id: "#Memory-Game", linkId: "5" },
        { isActive: false, id: "#tumblrclone", linkId: "6" },
        { isActive: false, id: "#footer", linkId: "7" },
      ],

      blogs: [
        {
          name: "kenta-nikki",
          url: "assets/background-image/kenta-nikki.jpg",
          avatar: "assets/avatar/kenta-nikki.jpg",
          notes: 2500,
        },
        {
          name: "bethfuller",
          url: "assets/background-image/bethfuller.png",
          avatar: "assets/avatar/bethfuller.jpg",
          notes: 2500,
        },
        {
          name: "artbylittlebug",
          url: "assets/background-image/artbylittlebug.jpg",
          avatar: "assets/avatar/artbylittlebug.jpg",
          notes: 2500,
        },
        {
          name: "instantreigen",
          url: "assets/background-image/instantreigen.jpg",
          avatar: "assets/avatar/instantreigen.jpg",
          notes: 2500,
        },
        {
          name: "Kpop",
          url: "assets/background-image/Kpop.jpg",
          avatar: "assets/avatar/Kpop.jpg",
          notes: 2500,
        },
        {
          name: "mathildejr",
          url: "assets/background-image/mathildejr.jpg",
          avatar: "assets/avatar/mathildejr.jpg",
          notes: 2500,
        },
        {
          name: "nooskadraws",
          url: "assets/background-image/nooskadraws.jpg",
          avatar: "assets/avatar/nooskadraws.jpg",
          notes: 2500,
        },
        {
          name: "onurilter",
          url: "assets/background-image/onurilter.jpg",
          avatar: "assets/avatar/onurilter.png",
          notes: 2500,
        },
        {
          name: "tvoom",
          url: "assets/background-image/tvoom.jpg",
          avatar: "assets/avatar/tvoom.jpg",
          notes: 2500,
        },
        {
          name: "terahsvent",
          url: "assets/background-image/terahsvent.jpg",
          avatar: "assets/avatar/terahsvent.jpg",
          notes: 2500,
        },
        {
          name: "michellekingdom",
          url: "assets/background-image/michellekingdom.jpg",
          avatar: "assets/avatar/michellekingdom.jpg",
          notes: 2500,
        },
        {
          name: "artofmaquenda",
          url: "assets/background-image/artofmaquenda.gif",
          avatar: "assets/avatar/artofmaquenda.jpg",
          notes: 2500,
        },
        {
          name: "outerspacebih",
          url: "assets/background-image/outerspacebih.jpg",
          avatar: "assets/avatar/outerspacebih.jpg",
          notes: 2500,
        },
      ],
      blogsArts: [
        {
          name: "sleepyseaslug",
          artUrl: "assets/Arts/sleepyseaslug.webp",
          avatar: "assets/avatar/sleepyseaslug.jpg",
          notes: 2500,
        },
        {
          name: "blatpolana",
          artUrl: "assets/Arts/blatpolana.jpg",
          avatar: "assets/avatar/blatpolana.jpg",
          notes: 2500,
        },
        {
          name: "daniellechenettedraws",
          artUrl: "assets/Arts/daniellechenettedraws.webp",
          avatar: "assets/avatar/daniellechenettedraws.jpg",
          notes: 2500,
        },
        {
          name: "bcbae",
          artUrl: "assets/Arts/bcbae.jpg",
          avatar: "assets/avatar/bcbae.jpg",
          notes: 2500,
        },
        {
          name: "michellekingdom",
          artUrl: "assets/Arts/michellekingdom.jpg",
          avatar: "assets/avatar/michellekingdom.jpg",
          notes: 2500,
        },
        {
          name: "nooskadraws",
          artUrl: "assets/Arts/nooskadraws.jpg",
          avatar: "assets/avatar/nooskadraws.jpg",
          notes: 2500,
        },
        {
          name: "onurilter",
          artUrl: "assets/Arts/onurilter.jpg",
          avatar: "assets/avatar/onurilter.png",
          notes: 2500,
        },
        {
          name: "artbylittlebug",
          artUrl: "assets/Arts/artbylittle.jpg",
          avatar: "assets/avatar/artbylittlebug.jpg",
          notes: 2500,
        },
        {
          name: "mathildejr",
          artUrl: "assets/Arts/mathildejr.jpg",
          avatar: "assets/avatar/mathildejr.jpg",
          notes: 2500,
        },
        {
          name: "instantreigen",
          artUrl: "assets/Arts/instantreigen.jpg",
          avatar: "assets/avatar/instantreigen.jpg",
          notes: 2500,
        },
      ],
      postedBy: [
        {
          artistName: "user",
          artistAvatar: "avatar",
        },
      ],
    };
  },

  mounted() {
    document
      .getElementById("container")
      .addEventListener("scroll", () => this.onScroll(this.$refs));
    // this.handleBackgroundImage(this.blogs)
  },
  beforeUnmount() {
    document
      .getElementById("container")
      .removeEventListener("scroll", () => this.onScroll(this.$refs));
  },

  methods: {
    onScroll(ref) {
      this.isElementInViewport(ref.login) &&
        this.activeIndicator(this.indicatorList[0]);
      this.isElementInViewport(ref.About) &&
        this.activeIndicator(this.indicatorList[1]);
      this.isElementInViewport(ref.Blogs) &&
        this.activeIndicator(this.indicatorList[2]);
      this.isElementInViewport(ref.Somedia) &&
        this.activeIndicator(this.indicatorList[3]);
      this.isElementInViewport(ref.contactManager) &&
        this.activeIndicator(this.indicatorList[4]);
      this.isElementInViewport(ref.MemoryGame) &&
        this.activeIndicator(this.indicatorList[5]);
      this.isElementInViewport(ref.tumblrclone) &&
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
      this.indicatorList.forEach((indicator) => {
        indicator.isActive = false;
      });
      indicator.isActive = "activeindicator";
      this.iconsShow(this.indicatorList);
      this.showBlogs(this.indicatorList);
      this.handleSoMediaDisplay(this.indicatorList);
      this.handleContactManagerDisplay(this.indicatorList);
      this.handleMemoryGameDisplay(this.indicatorList);
      this.handleTumblrDisplay(this.indicatorList);

      this.handleMediaIconPop(this.indicatorList);
    },

    handleSearchInput() {
      document.getElementsByClassName("searchInput").style =
        "background-color: rgba(253, 254, 255,1);";
      console.log(document.getElementsByClassName("searchInput"));
    },

    iconsShow(indicator) {
      if (indicator[1].isActive.length) {
        this.$refs.photoBig.style =
          "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:61%;bottom:42%; ";

        this.$refs.text1.style =
          "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;bottom: 68%;right:11.10%;";

        setTimeout(() => {
          this.$refs.text2.style =
            "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;bottom: 44%;right:11.10%;";
        }, 200);
        setTimeout(() => {
          this.$refs.text3.style =
            "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;bottom: 34%;right:10%;";
        }, 400);
        setTimeout(() => {
          this.$refs.text4.style =
            "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;bottom: 10%;right:52%;";
        }, 800);
      } else {
        this.$refs.photoBig.style = "opacity:0;right:120%;bottom:45%;";
        this.$refs.text1.style = "opacity:0;bottom: 68%;right:-50%;";
        this.$refs.text2.style = "opacity:0;bottom: 44%;right:-50%;";
        this.$refs.text3.style = "opacity:0;bottom:-50%;right:10%;";
        this.$refs.text4.style = "opacity:0;bottom:-50%;right:52%;";
      }
    },

    showBlogs(indicator) {
      this.$refs.hoverControl.style = "display:block";
      this.$refs.Blog.style = "display:flex";
      setTimeout(() => {
        if (indicator[2].isActive.length) {
          this.$refs.Blog.style =
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
            this.$refs.hoverControl.style = "display:none";
          }, 2000);
        } else {
          this.$refs.Blog.style = "margin-top:20rem";
          this.$refs.img1.style = "opacity:0;bottom: 68%;right:-50%;";
          this.$refs.img2.style = "opacity:0;left:100%";
          this.$refs.img3.style = "opacity:0;left:100%";
          this.$refs.img4.style = "opacity:0;left:100%";
          this.$refs.hoverControl.style = "display:block";
          setTimeout(() => {
            this.$refs.Blog.style = "display:none";
          }, 100);
        }
      }, 500);
    },

    handleLoadingDots(clearInterVal) {
      const interVal = setInterval(() => {
        this.$refs.loadOne.style =
          " transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s";
        setTimeout(() => {
          this.$refs.loadTwo.style =
            "transform: scale(1,1.5);background-color:#b2b7c5;transition: all 0.5s";
        }, 125);
        this.$refs.loadThree.style =
          "transform: scale(1,1);background-color:#ffffff;transition: all 0.5s";
        setTimeout(() => {
          this.$refs.loadOne.style =
            "transform: scale(1,1);background-color:#ffffff;transition: all  0.5s";
          setTimeout(() => {
            this.$refs.loadTwo.style =
              "transform: scale(1,1);background-color:#ffffff;transition: all  0.5s";
          }, 125);
          this.$refs.loadThree.style =
            "transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s";
        }, 250);
      }, 500);

      clearInterVal && clearInterval(interVal);
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
      } else {
        this.$refs.SomediaImg.style =
          "margin-top:40rem; margin-left:-50rem;opacity:0;margin-right:50rem;";
        this.$refs.somediaText.style =
          "opacity:0 ;margin-left:50rem;margin-right:-50rem";
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
      } else {
        this.$refs.contactManagerText.style = "margin-top:40rem;opacity:0";
        this.$refs.contactManagerImg.style =
          "opacity:0;margin-left:50rem;margin-top:50rem";
      }
    },

    handleMemoryGameDisplay(indicator) {
      if (indicator[5].isActive.length) {
        this.$refs.MemoryGameImg.style =
          "margin-top:0;margin-left:-50rem; margin-right:50rem;opacity:1 ;transition: all ease-out 0.7s";
        setTimeout(() => {
          this.$refs.MemoryGameText.style =
            "opacity:1 ;margin-top:0;transition: all ease-out 0.7s";
          this.$refs.MemoryGameImg.style =
            "margin-left:0;opacity:1 ;margin-right:0rem;transition: all ease-out 0.7s";
        }, 700);
      } else {
        this.$refs.MemoryGameImg.style =
          "margin-top:40rem; margin-left:-50rem;margin-right:50rem;opacity:0";
        this.$refs.MemoryGameText.style = "opacity:0 ;margin-top:-50rem";
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
      } else {
        this.$refs.tumblrcloneImg.style =
          "margin-left:50rem; margin-top:50rem;opacity:0";
        this.$refs.tumblrcloneText.style =
          "opacity:0 ;margin-left:-50rem;margin-right:50rem";
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
      } else {
        document.querySelectorAll(".iconContainer").forEach((icon) => {
          icon.style = "opacity:0;transform:scale(0.5,0.5)";
        });
      }
    },

    handleBackgroundImage(blogs) {
      let num = Math.floor(Math.random() * blogs.length);
      this.$refs.login.style = "background-image:url(" + blogs[num].url + ")";
      this.$refs.footer.style = "background-image:url(" + blogs[num].url + ")";
      this.postedBy[0].artistAvatar = blogs[num].avatar;
      this.postedBy[0].artistName = blogs[num].name;
      setInterval(() => {
        let num = Math.floor(Math.random() * blogs.length);
        this.$refs.login.style = "background-image:url(" + blogs[num].url + ")";
        this.$refs.footer.style =
          "background-image:url(" + blogs[num].url + ")";
        this.postedBy[0].artistAvatar = blogs[num].avatar;
        this.postedBy[0].artistName = blogs[num].name;
      }, 10000);
    },
  },
});

Container.mount("#container");
