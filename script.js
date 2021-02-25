function insert(number) {
    document.form.textview.value = document.form.textview.value + number;
}

function clean() {
    document.form.textview.value = ""
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
}

function equal() {
    let exp = document.form.textview.value;
    if(exp.length ) {
        document.form.textview.value = eval(exp)
    }

}