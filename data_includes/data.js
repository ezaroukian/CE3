//genData.js makes all the test/filler items that are added via genWrapper()
//var manualSendResults = true;
var manualSendResults = false;
//var shuffleSequence = seq("intro","inst",rshuffle(rshuffle("test.itv","test.cre","filler")),"sr","done");
//var shuffleSequence = seq(rshuffle("fe12_o_p_c-ce12_n_o_c", "fe12_o_p_c-ce12_n_o_d", "fe12_o_p_c-ce12_n_r_c", "fe12_o_p_c-ce12_n_r_d", "fe12_o_p_c-ce21_n_o_c", "fe12_o_p_c-ce21_n_o_d", "fe12_o_p_c-ce21_n_r_c", "fe12_o_p_c-ce21_n_r_d", "fe12_m_n_c-ce12_n_o_c", "fe12_m_n_c-ce12_n_o_d", "fe12_m_n_c-ce12_n_r_c", "fe12_m_n_c-ce12_n_r_d", "fe12_m_n_c-ce21_n_o_c", "fe12_m_n_c-ce21_n_o_d", "fe12_m_n_c-ce21_n_r_c", "fe12_m_n_c-ce21_n_r_d", "fe21_o_p_c-ce12_n_o_c", "fe21_o_p_c-ce12_n_o_d", "fe21_o_p_c-ce12_n_r_c", "fe21_o_p_c-ce12_n_r_d", "fe21_o_p_c-ce21_n_o_c", "fe21_o_p_c-ce21_n_o_d", "fe21_o_p_c-ce21_n_r_c", "fe21_o_p_c-ce21_n_r_d", "fe21_m_n_c-ce12_n_o_c", "fe21_m_n_c-ce12_n_o_d", "fe21_m_n_c-ce12_n_r_c", "fe21_m_n_c-ce12_n_r_d", "fe21_m_n_c-ce21_n_o_c", "fe21_m_n_c-ce21_n_o_d", "fe21_m_n_c-ce21_n_r_c", "fe21_m_n_c-ce21_n_r_d", "fe12_o_p_i-ce12_n_o_i", "fe12_o_p_i-ce12_n_r_i", "fe12_o_p_i-ce12_p_o_i", "fe12_o_p_i-ce12_p_r_i", "fe12_o_p_i-ce21_n_o_i", "fe12_o_p_i-ce21_n_r_i", "fe12_o_p_i-ce21_p_o_i", "fe12_o_p_i-ce21_p_r_i", "fe12_m_n_i-ce12_n_o_i", "fe12_m_n_i-ce12_n_r_i", "fe12_m_n_i-ce12_p_o_i", "fe12_m_n_i-ce12_p_r_i", "fe12_m_n_i-ce21_n_o_i", "fe12_m_n_i-ce21_n_r_i", "fe12_m_n_i-ce21_p_o_i", "fe12_m_n_i-ce21_p_r_i", "fe21_o_p_i-ce12_n_o_i", "fe21_o_p_i-ce12_n_r_i", "fe21_o_p_i-ce12_p_o_i", "fe21_o_p_i-ce12_p_r_i", "fe21_o_p_i-ce21_n_o_i", "fe21_o_p_i-ce21_n_r_i", "fe21_o_p_i-ce21_p_o_i", "fe21_o_p_i-ce21_p_r_i", "fe21_m_n_i-ce12_n_o_i", "fe21_m_n_i-ce12_n_r_i", "fe21_m_n_i-ce12_p_o_i", "fe21_m_n_i-ce12_p_r_i", "fe21_m_n_i-ce21_n_o_i", "fe21_m_n_i-ce21_n_r_i", "fe21_m_n_i-ce21_p_o_i", "fe21_m_n_i-ce21_p_r_i"));//seq("fe12_o_p_c-ce12_n_o_c");
var shuffleSequence = genSeq();

var defaults = [
  "Separator", {
    transfer: 1000,
    normalMessage: "Please wait for the next statement.",
    errorMessage: "Wrong. Please wait for the next statement."
  },
  "DashedSentence", {
    mode: "self-paced reading",
    display: "dashed"
  },
  "AcceptabilityJudgment", {
    as: ["1", "2", "3", "4", "5", "6", "7"],
    presentAsScale: true,
    instructions: "Use number keys or click boxes to answer.",
    leftComment: "(bad)", rightComment: "(good)"
  },
  "Question", {
    randomOrder: false
  },  
  "Message", {
    hideProgressBar: true
  },
  "Form", {
    hideProgressBar: false,
    countsForProgressBar: true,
    continueOnReturn: true,
  }
];

var items = [
    ["sep", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "<div align='center'><p><i>Press any key to continue.</i></p><p><i>Remember to respond as <b>quickly</b> and as <b>accurately</b> as possible.</i></p></div>",
        ignoreFailure: true
    }],
    ["inst", "Form", {
        html: { include: "survey.html" },
        hideProgressBar: true,
        //countsForProgressBar: false,
    } ],
    ["inst", "Message", {
        html: {include: "gen_instructions1.html"},
    }],
    ["inst", "PracticeQuestion", {
        q: "the person Mary reads the book Moby-Dick.<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "gen_instructions2.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "the person Mary reads the book Moby-Dick".</p><p> In the diagram, Mary reads Moby-Dick</p> <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }],    
	
    ["inst", "PracticeQuestion", {
        q: "the person Mary reads the book Middlemarch.<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "No",
        html: {include: "gen_instructions3.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "the person Mary reads the book Middlemarch".</p><p> In the diagram, Mary reads Moby-Dick, not Middlemarch.</p> <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }], 
	
    ["inst", "PracticeQuestion", {
        q: "if (the person P1 reads the book B1) then (the person P1 has as name Mary).<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "Yes"
        html: {include: "gen_instructions4.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "the person Mary reads the book Middlemarch".</p><p> In the diagram, there is one person-book pair we need to look at. <ol><li>When P1 = Mary and B1 = Moby-Dick, the rule requires B1 = Moby-Dick. - Good</li> </ol></p>  <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }], 
	
    ["inst", "PracticeQuestion", {
        q: "if (the person P1 reads the book B1) then (the person P1 has as name Mary).<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/2_zpstsuxtudr.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "No"
        html: {include: "gen_instructions5.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "the person Mary reads the book Middlemarch".</p><p> In the diagram, there are two person-book pairs we need to look at. <ol><li>When P1 = John and B1 = War and Peace, the rule requires P1 = Mary. - Inconsistent with rule!</li><li>When P1 = Mary and B1 = Moby-Dick, the rule requires P1 = Mary. - Consistent with rule. </li> </ol></p>  <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }], 
	
	["inst", "PracticeQuestion", {
        q: "if (the person P1 reads the book B1) then (the book B1 has as name Moby-Dick).<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/2_zpstsuxtudr.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "No",
        html: {include: "gen_instructions6.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "if (the person P1 reads the book B1) then (the book B1 has as name Moby-Dick)".</p><p> In the diagram, there are two person-book pairs we need to look at. <ol><li>When P1 = Mary and B1 = Moby-Dick, B1 = Moby-Dick. - Good</li> <li>When P1 = John and B1 = War and Peace, B1 = Moby-Dick. - Inconsistent!</li></ol></p> <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/2_zpstsuxtudr.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }],
	
	["inst", "PracticeQuestion", {
        q: "if (the person P1 reads the book B1) then (the book B1 has as name Moby-Dick).<br><img src='http://i1341.photobucket.com/albums/o753/ezaroukian/3_zpskhezeis8.png' height='360'><br>Is the diagram consistent with the rule?",
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "gen_instructions6.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],	
	["inst", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "Correct!",
        errorMessage: '<p style="color:red">Incorrect!</p><p> The rule was "if (the person P1 reads the book B1) then (the book B1 has as name Moby-Dick)".</p><p> In the diagram, there are two person-book pairs we need to look at. <ol><li>When P1 = Mary and B1 = Moby-Dick, B1 = Moby-Dick. - Good</li> <li>When P1 = John and B1 = Moby-Dick, B1 = Moby-Dick. - Good</li></ol></p> <img src="http://i1341.photobucket.com/albums/o753/ezaroukian/3_zpskhezeis8.png" height="360">',
		hideProgressBar: true,
        countsForProgressBar: false,
    }],
	
    ["inst", "Message", {
        html: {include: "gen_instructions-end.html"},
    }],
   ];
items = items.concat(wrapper());

//alert(items);
