'use strict'

class Utils extends Storage {
    getPageDimension () {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    getPerpage () {
        if (this.selfSetting) {
            this.selfSetting = false;
            return this.perpage;
        }
        const {width} = this.getPageDimension();
        const devided = width / this.productWidth;
        return Math.round(devided);
    }
    setPerPage (n = 1) {
        this.perpage = n;
        this.selfSetting = true
        return this;
    }
}