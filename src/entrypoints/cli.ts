#!/usr/bin/env node

/* 
SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>

SPDX-License-Identifier: GPL-3.0-or-later
*/

import { Command } from "commander";
import { GitSource } from "../datasources";
import { validate } from "../validator";

const program = new Command();

program
  .name("reuse-me")
  .description("Copyright and License management CLI tool")

program
  .command("check")
  .description(
    "Checks whether the repository is compliant with the Reuse Specification."
  )
  .action(async () => {
    validate(new GitSource());
  });

program.parse();