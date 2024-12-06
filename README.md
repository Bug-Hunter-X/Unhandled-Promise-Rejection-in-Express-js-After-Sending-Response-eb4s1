# Unhandled Promise Rejection in Express.js After Sending Response

This repository demonstrates a common but subtle issue in Express.js applications: unhandled promise rejections that occur *after* a response has been sent to the client.  Standard error handling middleware might not catch these.

The `bug.js` file shows the problematic code. The `bugSolution.js` offers a solution.

## Problem

The `someAsyncOperation` function simulates an asynchronous operation (e.g., database query, external API call) that might fail.  If it fails *after* `res.send()` is called, the error is not caught by the standard Express error handling middleware, potentially leading to a server crash or unhandled rejection warnings.

## Solution

The solution involves careful handling of asynchronous operations and using a centralized error handling mechanism.  The solution should prevent errors from being thrown after the response is sent and properly handle the exceptions.