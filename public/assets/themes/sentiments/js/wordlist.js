'use strict'

class Wordlist {
    constructor (selector = null, prefix = '') {
        this.prefix = prefix
        this.selector = selector
        this.currentCursorPosition = 0
    }

    getToken () {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTU0ODU4ODEzNCwiZXhwIjoxNTQ4NjAyNTM0fQ.nXop05nHntHEaWOA8wVCVJo69rV_7-nBpzl5ud31CUg'
    }

    appendWordList (n, obj = {}) {
        const colType = colShow['type'] ? '' : 'none'
        const colId = colShow['id'] ? '' : 'none'
        const colEn = colShow['en'] ? '' : 'none'
        const colDesc = colShow['desc'] ? '' : 'none'

        return `
            <tr id="section-${obj._id}">
                <td>${n}</td>
                <td id="col-type" style="display:${colType}">${obj.type || ''}</td>
                <td id="col-id_keyword" style="display:${colId}">${obj.id_keyword || ''}</td>
                <td id="col-en_keyword" style="display:${colEn}">${obj.en_keyword || ''}</td>
                <td id="col-description" style="display:${colDesc}">${obj.description || ''}</td>
                <td>
                    <a class="btn btn-sm btn-danger" href="">
                        <i class="d-block d-md-none">O</i>
                        <span class="d-none d-md-block">trash</span>
                    </a>
                    <a class="btn btn-sm btn-warning" href="">
                        <i class="d-block d-md-none">O</i>
                        <span class="d-none d-md-block">edit</span>
                    </a>
                    <a class="btn btn-sm btn-primary" href="">
                        <i class="d-block d-md-none">O</i>
                        <span class="d-none d-md-block">preview</span>
                    </a>
                </td>
            </tr>
        `
    }

    getdata (limit = 10, skip = 0) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `/analytics/vocab/list?limit=${limit}&page=${skip}`,
                type: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.getToken()
                },
                success: (res) => {
                    resolve(res)
                },
                error: (err) => {
                    reject(err.message)
                }
            })
        })
    }

    appendToTable (res, start = 0) {
        for (let x in res.items) {
            const n = parseInt(x) + 1 + start
            $(this.selector)
                .append(this.appendWordList(n, res.items[x]))
        }
    }

    load (limit = 10) {
        if (typeof $ === 'undefined') throw new Error('Please add jquery first!')
        this.getdata(limit, 0)
            .then((res) => {
                if (!res.items) return false
                this.currentCursorPosition += limit
                this.appendToTable(res)
            })
            .catch((e) => {
                console.log(e.message)
            })
        return this
    }

    loadmore (limit = 10) {
        this.getdata(limit, this.currentCursorPosition)
            .then((res) => {
                this.appendToTable(res, this.currentCursorPosition)
                this.currentCursorPosition += limit
            })
            .catch((e) => {
                console.log(e.message)
            })
        return this
    }
}
