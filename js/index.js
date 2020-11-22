new Vue({
  el: "#root",
  data() {
    return {
      mainTitle: "Courses Tracker",
      platziLogo: [
        "https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png",
        "https://static.platzi.com/mf-landings/image/logotipo-platzi-768799552e5f26369e21a807b8a533f7.png",
      ],
      courses: [],
      color: "ff0000",
      students: ["Wandy Santana", "Megan Herrera", "Zeus Amenadiel"],
      time: "",
      title: "",
      error: false,
    };
  },
  methods: {
    addCourse() {
      if (this.time === "" || this.title === "") return (this.error = true);
      this.error = false;
      let course = { title: this.title, time: parseInt(this.time) };
      this.courses.push(course);

      this.title = "";
      this.time = "";
    },
  },
  computed: {
    totalTime: function () {
      if (this.courses.length === 0) return "No courses yet";
      let totalTime = 0;
      for (let i = 0; i <= this.courses.length - 1; i++) {
        // console.log(this.courses[i]);
        totalTime = totalTime + this.courses[i].time;
      }
      return totalTime;
    },
  },
  watch: {
    totalTime(newValue, oldValue) {
      this.students.length > 0 ? (this.color = "000") : (this.color = "ff0000");
    },
  },
});
