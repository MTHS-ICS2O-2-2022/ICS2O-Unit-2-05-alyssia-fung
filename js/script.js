// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function calculates area and perimeter of rectangle.
 */
"use strict"
function calculate() {
  // input
  const hours = parseInt(document.getElementById("hours").value)
  const rate = parseInt(document.getElementById("rate").value)

  // process
  const pay = hours * rate * (1 - 0.18)
  const tax = hours * rate * 0.18


  // output
document.getElementById("pay").innerHTML = `Your pay will be: $ ${pay.toFixed(2)}`
document.getElementById("pay").innerHTML = "Your pay will be: $" + pay.toFixed(2)

  document.getElementById("tax").innerHTML = `Your pay will be: $ ${tax.toFixed(2)}`
  document.getElementById("tax").innerHTML ="the gouvernment will take: $" + tax.toFixed(2)
}
