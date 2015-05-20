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
  "SeparatorHTML", {
    transfer: "keypress",
    normalMessage: "<h2>Correct!</h2>",
    errorMessage: "<h2 style='color:red'>Incorrect!</h2>",
	hideProgressBar: true,
    countsForProgressBar: false,
  },
 "MySeparator", {
    normalMessage: "<h2>Correct!</h2><p style='align:center;'>The rule and diagram are repeated below.</p>",
    errorMessage: "<h2 style='color:red'>Incorrect!</h2>",
	hideProgressBar: true,
    countsForProgressBar: false,
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
  "PracticeQuestion", {
    hideProgressBar: true,
	countsForProgressBar: false,
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

var items = [];
   
items = items.concat(genInst());
items = items.concat(wrapper());

//alert(items);
