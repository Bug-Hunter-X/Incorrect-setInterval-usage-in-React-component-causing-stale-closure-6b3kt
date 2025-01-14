# Incorrect setInterval Usage in React Component

This repository demonstrates a common error when using `setInterval` within a React component to update state. The issue arises from a closure over the initial state value, leading to the state not updating correctly.

## Bug Description
The `MyComponent` attempts to increment the `count` state every second using `setInterval`. However, the function passed to `setInterval` always uses the initial value of `count` (0) due to the closure. This results in the `count` variable never changing.

## Solution
The solution uses a functional update for the `setCount` function to ensure that the latest value of `count` is used.