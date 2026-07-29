---
title: "RISC-V CPU Emulator"
description: "Emulating a 32-bit RISC-V CPU using C from a class on computer architecture"
image: "/images/RISC-V-project/RISC-V_project_cover.png"
tags: ["RISC-V","C", "Computer Architecture","Assembly"]
year: 2022
featured: true
category: "engineering"
---

# What is Assembly Language?

In a [previous article](/articles/what-everyone-should-know-about-programming), I talked about what programming is and what programming languages are. This project uses the RISC-V (pronounced risk-five) assembly language, which is a bit different than a programming language.  

Programming languages tell a computer what to do, while assembly languages tell a computer what to do as well as how to manipulate the hardware to do it. Since assembly languages are so closely tied to hardware this way, it is machine dependent. This means that an assembly program that works on one computer may not work on another. Most of us have AMD or Intel CPUs in our computers, not RISC-V CPUs. So, if I want my computer to be able to run RISC-V instructions, I need an emulator to do so. 

# How Does The Program Work?
 This program has 2 parts. The first part disassembles (i.e., translates) binary (or hexadecimal) values to RISC-V assembly language instructions and the second part emulates a RISC-V CPU for carrying out these instructions. This program was made as part of a course on computer architecture and organization.   
   
The first half of this program (the disassembler) takes input in the form of a text file. This file should contain binary or hexadecimal values to be translated by the disassembler to RISC-V assembly instructions. Here is an example of a translation from hexadecimal values (left) to their corresponding RISC-V instructions (right). 

<img src="/images/RISC-V-project/hex_to_assembly.png" alt="hexadecimal values translated to risc-v instructions" class="img-large">

 Once the program receives the instructions to be carried out, the second half of the program (the emulator) will carry out these instructions exactly like a RISC-V CPU would. Programming also gives instructions to be executed, but unlike programming, assembly also tells the computer how to execute these instructions by specifying what values go into which memory components (called memory registers).  
  
Assembly languages are tough to use and coding with higher level languages is far easier and more readable. However, assembly languages are needed for hardware manipulation even today, and can be extremely useful for “tiny” but highly impactful improvements to performance at the hardware level. Learning assembly also automatically lends itself to learning more about how computer hardware works, which is essential for computer engineering. 