#!/usr/bin/env node

const program = require('commander')
const dns = require('dns')
const red = require('@f0c1s/color-red')
const yellow = require('@f0c1s/color-yellow')

function lookup (domain) {
  dns.lookup(domain, (err, address, family) => {
    if (err) {
      console.error(`ERROR: ${err.message}`)
      return err
    }
    console.log(`${yellow(domain)} at ${red(address)} via IPv${red(family)}`)
  })
}

program.arguments('<domain>')
  .action(lookup)
  .parse(process.argv)
