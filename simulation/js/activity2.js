function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Computational Complexity</h5>
        <p>Learning Objective: To understand how to choose efficient algorithms based on time and space complexity.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='show_act2_question();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    //ut_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function show_act2_question() {
    let next_btn = get_collapse_btn_element('Question', 'ques-btn-2');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act2-ques';
    let res = '2';
    let options = [
        "<p style='text-align:center'>O(n<sup>3</sup>)</p>",
        "<p style='text-align:center'>O(n!)</p>",
    ];
    //logic for comparing a, a1, b, b1
    let ques_text = `Finding the inverse of a matrix, especially large ones, is a computationally heavy procedure. Given are two methods for computing the same (assuming the given matrix A is invertible):<br> 
    1) LU Decomposition: Decompose A into L and U. Obtain A<sup>-1</sup> as the product of U<sup>-1</sup>, L<sup>-1</sup> and the permutation matrix. The time complexity of this process is of the order O(n<sup>3</sup>).<br>
    II) Adjoint method: Compute the Cofactor matrix and transpose it to form the Adjoint matrix. Dividing the adjoint matrix by the determinant of A gives A<sup>-1</sup>. The time complexity of this process is of the order O(n!).<br> For sufficiently large n, which of the following is the higher time complexity?
    `;
    let new_question = new Updated_Question(ques_text, options, res, div_ele, show_act2_question2);
    // hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    show_step('act2-ques');
    setTimeout(() => {
        MathJax.typeset();
    }, 200);
}
function show_act2_question2() {
    let next_btn = get_collapse_btn_element('Question', 'ques-btn-3');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-ques';
    let res = '1';
    let options = [
        "<p style='text-align:center'>I</p>",
        "<p style='text-align:center'>II</p>",
    ];
    //logic for comparing a, a1, b, b1
    let ques_text = `Finding the inverse of a matrix, especially large ones, is a computationally heavy procedure. Given are two methods for computing the same (assuming the given matrix A is invertible):<br>
    I) LU Decomposition: Decompose A into L and U. Obtain A<sup>-1</sup> as the product of U<sup>-1</sup>, L<sup>-1</sup> and the permutation matrix. The time complexity of this process is of the order O(n<sup>3</sup>). <br> 
    II) Adjoint method: Compute the Cofactor matrix and transpose it to form the Adjoint matrix. Dividing the adjoint matrix by the determinant of A gives A<sup>-1</sup>. The time complexity of this process is of the order O(n!). <br> Based on this, which of the above methods is more efficient for computation?`;
    let new_question = new Updated_Question(ques_text, options, res, div_ele, show_conclusion);
    // hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    show_step('act3-ques');
    setTimeout(() => {
        MathJax.typeset();
    }, 200);
}
function show_conclusion() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <p style="text-align:justify">
        <strong>Conclusion:</strong> <br>
        Computational power is required to perform matrix operations and store matrix data while working with systems of linear systems. The larger the systems, the greater the computational power required in terms of memory (storage) and time.<br>
        A matrix have most of the elements non-zero is called a dense matrix. A matrix in which most of the elements are zero is called a sparse matrix. As most of the elements in a sparse matrix are of no value (the 0 elements), and as they occur frequently in numerical analysis, the storage required for these matrices can be greatly optimised.<br>
        Techniques to store sparse matrices efficiently vary based on the type of matrix. For example, banded matrices can be stored in a smaller matrix with the number of columns equal to the band size. The skyline format eliminates zeros interspersed in a column as well, for storage purposes.<br>
        Likewise, reducing the time required to perform a computation is vital to improving the efficiency of a process. In fact, time complexity is arguably more important than space complexity in today's world where there is practically unlimited storage and everyone wants faster systems. Based on time complexity, it is vital to select an algorithm that takes the least amount of time to complete. <br>
        A great example of this comparison is finding the inverse of a matrix. This operation, especially for matrices of large order, is a computationally heavy procedure. Here is where smart decisions have to be made based on the fundamentals; for example, we would rather follow the LU-decomposition method than the cofactor method as we know that inverting a triangular matrix is computationally less expensive and much faster than inverting a full, dense matrix.
        </p>
        </div>
    </div> <br>
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='finish_activity();'  id='temp-btn-1234' >Finish</button></div>
    </div>
    `;
    maindiv.innerHTML += text;
}
function finish_activity() {
    alert('You have completed this experiment successfully.');
    maindiv.innerHTML = `Experiment Completed`;
}
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x1_inputs = get_matrix_html_with_title(3, 3, [
        [
            `<input id='a1-uta-11' class='form-control' />`,
            `<input id='a1-uta-12' class='form-control' />`,
            `<input id='a1-uta-13' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-21' class='form-control' />`,
            `<input id='a1-uta-22' class='form-control' />`,
            `<input id='a1-uta-23' class='form-control' />`,
        ],
        [':', ':', ':'],
    ], "<div class='row'><div class='col-4'>X1</div><div class='col-4'>X2</div><div class='col-4'>X2</div></div>", 'inline-block', '60%');
    let btn_text = get_collapse_btn_text('Iterations', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, 'A', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* X</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'C', 'inline-block', '15%')}</div>
        <br>

        <h5>Take the tolerance as 10-6. Start with initial guess solution [0 0 0]T. Perform Jacobi iterations</h5>

        <div id='ut-inp-div' style='text-align: center;'>${matrix_x1_inputs} &nbsp;</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function ut_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    mat_x1 = iterate(mat_a, c);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_ut() {
    let btn = (document.getElementById('temp-btn-123'));
    let inp_a;
    let inp_c;
    console.log(`matrix x1 =>`, mat_x1);
    //for a
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-uta-${i + 1}${j + 1}`));
            if (!verify_values_abs(parseFloat(inp_a.value), mat_x1[i][j])) {
                alert(`incorrect value in 3 x 3 matrix for a[${i + 1}][${j + 1}]`);
                return;
            }
        }
    }
    btn.remove();
    render_ut_a_c();
    start_act3();
}
function render_ut_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    div.innerHTML = `iteration matrix = ${get_matrix_html_with_title(10, 3, mat_x1, "<div class='row'><div class='col-4'>X1</div><div class='col-4'>X2</div><div class='col-4'>X2</div></div>", 'inline-block', '40%')}`;
}
//activity2();
//# sourceMappingURL=activity2.js.map