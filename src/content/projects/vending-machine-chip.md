---
title: "Vending Machine Logic Chip"
description: "An academic project from a class in Digital Logic and Hardware Design"
image: "/images/vending-machine-project/vend_machine_cover.png"
tags: ["FPGA","VHDL", "Quartus", "ModelSim","Hardware Design"]
year: 2021
featured: false
category: "engineering"
---

This two-person project is a vending machine made with VHDL code and the DE2-115 Altera FPGA board. Components were created and unit tested in ModelSim and the entire project was tested and interfaced to the board using Quartus. 

# Making Components
This project consisted largely of making small components and later combining them into a larger structure. Initially I worked on a few components, and I thought the most interesting one was this component that converted an 8-bit binary input to a set of 3 4-bit binary-coded-decimal (BCD) values as output. For example, if you want to represent 246 in binary, this is one 8-bit value: 11110110. The BCD output we’d get from this is 3 sets of 4-bit values. Each set of 4-bits represents a digit. 0010 is 2, 0100 is 4, and 0110 is 6, therefore, the BCD output to represent 246 is 0010 0100 0110. 

# Testing and WaveForms
My main responsibility in this group project was testing the individual components. This includes components that keep track of how many coins have been inserted, what the change due to the customer is, what price the user would like to program for a certain product, and more.

The testing would happen in ModelSim, where after creating our components, I’d prepare a testbench, which is basically a component/entity that tests the component we really need. Essentially, the testbenches would test different inputs, and a waveform shows us the outputs. From here, I’m able to look over the waveform and make sure that the logic introduced by the component is correct. Remember the BCD component mentioned before? Here is the waveform, and you can check that an input of 11110110 yields an output of 0010 0100 0110, both representing 246. 

<img src="/images/vending-machine-project/bcd_example.png" alt="binary to BCD example">

As a result of continuous unit testing, we were able to keep up with and prevent logic errors, track the delays in output changes when inputs have changed, and debug far easier. Debugging became easier because when it was necessary to deduce the cause of an issue, results from unit tests would narrow down what the cause couldn't be. After all, if a test is showing that a certain part of the logic is fully working, we are able to confidently deduce that the tested and verified logic is not the cause of the problem. 

<h1 class="text-center">Extra Screenshots</h1>

<img src="/images/vending-machine-project/1.png" alt="waveform example 1">

<img src="/images/vending-machine-project/2.png" alt="waveform example 2">

<img src="/images/vending-machine-project/3.png" alt="waveform example 3">

<img src="/images/vending-machine-project/4.png" alt="waveform example 4">
