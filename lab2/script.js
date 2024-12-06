
export default {
  data() {
    return {qlist:[],
            answers: [],
            score: 0,
            page: 1,
     }
  },
  mounted(){
    this.loadData()
  },
  methods : {
    async loadData(){
      var res = await fetch("quize.json")
      this.qlist = await res.json()
      this.page = 1;
    },
    validate() {
      for (var a in this.qlist) {
          if (!this.answers[a]) return false;
      }
      return true;
    },
    grading() {
        var n = 0;
        for (var a in this.qlist) {
            if (this.answers[a] == this.qlist[a].answer) n++;
            
        }
        this.score = n;
        this.page = 3;
        return n;
    }

  }
}