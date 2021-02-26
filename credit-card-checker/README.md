# Project: Credit Card Checker

## Table of contents
* [Introduction](#introduction)
* [Technologies needed?](#Technologies-needed?)
* [Launching](#Launching)
* [Features](#Features)
* [Examples of use](#Examples-of-use)
* [Status](#Status)
* [Sources](#Sources)
* [Feedback](#Feedback)

## Introduction

*The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!*

## Technologies needed?

* Javascript ES6
* [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description)

## Launching

* If you wish to edit and customize this code you need a text editor like Visual Studio Code or Notepadd++.
* The easiest way to run the code is to use Visual Studio Code as your text editor and then install a NodeJs extension on the editor, and then run it from there.

## Features

* use the code to find out if a credit card number is valid or not by using the Luhn algorithm.
* You can use [this website](https://www.freeformatter.com/credit-card-number-generator-validator.html#howToValidate) to test whether the code is running correctly aka whether the code returns that an invalid card is truly invalid. The website also shows you what type of digit formats different credit card companies/banks use for issuer their client cards. 

## Examples of use

On line 15 write a credit card's number that you wish to check (in the following format and save):

```javascript
const credit_card1 = [4 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
```
Now check the validity of your credit card by saving this code on line 91. The program will return whether the card is valid or invalid card.
```javascript
console.log(validateCred(credit_card1));
```
There are other features that the code provides: listing invalid, valid cards; listing companies with invalid cards...

## Status

Project is: finished!

The project has been finished and no future updates have been planned since the original purpose of the project - to learn javascript and create a program that could check the validity of a credit card's number.

The project's code can, of course, be incorporated in a payment gateway or be expanded upon in general.

Yet, I am always open to code suggestions, etc.

## Sources

This project was created to complete a [Codecademy project](https://discuss.codecademy.com/t/credit-card-checker-project/439414).

## Feedback

Created by @ghost-of-the-mind - feel free to contact me!