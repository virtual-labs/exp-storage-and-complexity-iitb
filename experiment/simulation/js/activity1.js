let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'> <br>
            <h4 class="center-text fs-20px fw-600">System of Linear Equations: Storage and Complexity</h4>
            <div class="fs-16px">
                <p>Learning Objective: To understand how to make sparse matrices more compact to efficiently utilise resources required to store their elements.</p>
            </div>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
let matrix_bm_inputs = get_matrix_html_with_title(4, 3, [
    [
        `<input id='a1-matbm-11' class='form-control' />`,
        `<input id='a1-matbm-12' class='form-control' />`,
        `<input id='a1-matbm-13' class='form-control' />`,
    ],
    [
        `<input id='a1-matbm-21' class='form-control' />`,
        `<input id='a1-matbm-22' class='form-control' />`,
        `<input id='a1-matbm-23' class='form-control' />`,
    ],
    [
        `<input id='a1-matbm-31' class='form-control' />`,
        `<input id='a1-matbm-32' class='form-control' />`,
        `<input id='a1-matbm-33' class='form-control' />`,
    ],
    [
        `<input id='a1-matbm-41' class='form-control' />`,
        `<input id='a1-matbm-42' class='form-control' />`,
        `<input id='a1-matbm-43' class='form-control' />`,
    ],
], "<div class='row'><div class='col-4'>a</div><div class='col-4'>b</div><div class='col-4'>c</div></div>", 'inline-block', '60%');
let matrix_c_inputs = get_matrix_html_with_title(5, 1, [
    [`<input id='a1-matc-11' class='form-control' />`],
    [`<input id='a1-matc-21' class='form-control' />`],
    [`<input id='a1-matc-31' class='form-control' />`],
    [`<input id='a1-matc-41' class='form-control' />`],
    [`<input id='a1-matc-51' class='form-control' />`],
], 'Diagonal Elements', 'inline-block', '25%');
let matrix_skyline_inputs = get_matrix_html_with_title(2, 5, [
    [
        `<input id='a1-matsk-11' class='form-control' />`,
        `<input id='a1-matsk-12' class='form-control' />`,
        `<input id='a1-matsk-13' class='form-control' />`,
        `<input id='a1-matsk-14' class='form-control' />`,
        `<input id='a1-matsk-15' class='form-control' />`,
    ],
    [
        `<input id='a1-matsk-21' class='form-control' />`,
        `<input id='a1-matsk-22' class='form-control' />`,
        `<input id='a1-matsk-23' class='form-control' />`,
        `<input id='a1-matsk-24' class='form-control' />`,
        `<input id='a1-matsk-25' class='form-control' />`,
    ],
], 'Skyline Elements', 'inline-block', '60%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Banded Matrices', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div style='text-align: center;'>${get_matrix_html_with_title(4, 4, mat_bm, '', 'inline-block', '40%')}
        </div> <br>

        <p>Given a banded matrix, store the elements in a compact manner by omitting the outlier 0s and storing only the elements in the band (a,b,c).</p>

        <div id='piv-inp-div' style='text-align: center;'>${matrix_bm_inputs}</div> <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-2'>Next</button></div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    //pivot_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-2'));
    let inp_a;
    console.log(`matrix bm verify value =>`, mat_bm_verify);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-matbm-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), mat_bm_verify[i][j])) {
                alert(`incorrect value in 4 x 3 matrix for a[${i}][${j}]`);
                return;
            }
        }
    }
    if (btn) {
        btn.remove();
    }
    render_bm();
    start_skyline();
    //activity2();
}
function render_bm() {
    let div = (document.getElementById('piv-inp-div'));
    div.innerHTML = `${get_matrix_html_with_title(4, 3, mat_bm_verify, "<div class='row'><div class='col-4'>a</div><div class='col-4'>b</div><div class='col-4'>c</div></div>", 'inline-block', '40%')}`;
}
//for starting first activity
function start_skyline() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Skyline Storage Format', 'tb1-box2');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box2'>
        <div style='text-align: center;'>${get_matrix_html_with_title(5, 5, mat_skyline, '', 'inline-block', '40%')}</div> <br>

        <p>Given a symmetric sparse matrix, fill in the diagonal elements and the skyline elements considering the lower triangular matrix. If there is no skyline element, enter 0.</p>

        <div id='sk-inp-div' style='text-align: center;'>${matrix_c_inputs} &nbsp; <span style='font-size: 30px;'></span> &nbsp;&nbsp; ${matrix_skyline_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_elements();'  id='temp-btn-3' >Next</button></div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box2'), 150);
}
function verify_matrix_elements() {
    let btn = (document.getElementById('temp-btn-3'));
    let inp_ele;
    let inp_sk;
    console.log(`matrix elements verify value =>`, mat_diagonal);
    console.log(`skyline elements verify value =>`, mat_skyline_verify);
    //for c
    for (let i = 0; i < 5; i++) {
        inp_ele = (document.getElementById(`a1-matc-${i + 1}1`));
        if (!verify_values(parseFloat(inp_ele.value), mat_diagonal[i][0])) {
            alert(`incorrect value in 5 x 1 matrix for b[${i}]`);
            return;
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++) {
            inp_sk = (document.getElementById(`a1-matsk-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_sk.value), mat_skyline_verify[i][j])) {
                alert(`incorrect value in 2 x 5 matrix for a[${i}][${j}]`);
                return;
            }
        }
    }
    btn.remove();
    activity2();
    //render_diag_matrix();
}
// function render_diag_matrix() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('sk-inp-div');
//     let div1: HTMLDivElement = <HTMLDivElement> document.getElementById('sk-inp-div');
//     div.innerHTML = `<div id='sk-inp-div' style='text-align: center;'>${mat_diagonal} &nbsp; <span style='font-size: 30px;'></span> &nbsp;&nbsp; ${mat_skyline_verify}</div>`;
//     //div1.innerHTML = `${get_matrix_html_with_title(2, 5, mat_skyline_verify, "", 'inline-block', "40%")}`;
//     //div.innerHTML+=div1;
// }
activity1();
//# sourceMappingURL=activity1.js.map