// gaussian elimination variables ----------------------------------------------------------------
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let mat_x = [];
let mat_x1 = [];
//compare two values using absolute difference
function verify_values_abs(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let res = false;
    res = (Math.abs(value - truevalue) < 0.001) ? true : false;
    // if(calculated_value <= 1) {
    //     return true
    // } else {
    //     return false;
    // }
    return res;
}
let mat_bm = [
    [
        1,
        3,
        0,
        0
    ],
    [
        -2,
        5,
        1,
        0
    ],
    [
        0,
        4,
        3,
        -1
    ],
    [
        0,
        0,
        4,
        5
    ]
];
let mat_bm_verify = [
    [
        0,
        1,
        3
    ],
    [
        -2,
        5,
        1
    ],
    [
        4,
        3,
        -1
    ],
    [
        4,
        5,
        0
    ]
];
let mat_skyline = [
    [
        '1',
        '-1',
        '*',
        '-3',
        '*'
    ],
    [
        '-1',
        '5',
        '*',
        '*',
        '*'
    ],
    [
        '*',
        '*',
        '4',
        '6',
        '4'
    ],
    [
        '-3',
        '*',
        '6',
        '7',
        '*'
    ],
    [
        '*',
        '*',
        '4',
        '*',
        '-5'
    ]
];
let mat_diagonal = [
    [
        1
    ],
    [
        5
    ],
    [
        4
    ],
    [
        7
    ],
    [
        -5
    ]
];
let mat_skyline_verify = [
    [
        -1,
        0,
        6,
        0,
        0
    ],
    [
        -3,
        0,
        4,
        0,
        0
    ]
];
//# sourceMappingURL=data.js.map