class Utils {
    constructor(){
        this.isHave = true
    }
    findParents(target, str) {
        if (target) {
            if (target.nodeName.toLowerCase() == "body") {
                this.isHave = false
            } else {
                if (target.classList.contains(str)) {
                    this.isHave = true
                } else {
                    this.findParents(target.parentElement, str)
                }
            }
            return this.isHave
        }
    }
}

const utils = new Utils()

export default utils
