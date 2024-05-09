---
slug: april-2024
title: April 2024
date: 2024-05-06
---

## Features

- Added bounds support across models to prevent predictions outside of expected ranges.
- Internal data simulation for much faster testing and development.
- Internal logging and debugging system for faster issue resolution.
- Added constraints to `find_best_actions` to prevent invalid actions & outcomes.
- Added batch support for `find_best_actions` to make it easier to find best actions over multiple scenarios.
- Add support for weighted multi-objective optimisation in `find_best_actions`.

## Improvements

- Internal refactoring of server codebase for faster development cycles.
- Upgraded Node.js client to work with latest version of the server.
- Improved error handling for invalid user inputs.