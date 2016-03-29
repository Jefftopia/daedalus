# daedalus
Gaming Analytics Platform

##Todo

* Set up dependencies (in progress)
* figure out Java parser
* being db setup
* create init scripts, use npm to run setup scripts

##Tools 
 * IDE: Cloud9 (for now) - sharable Unix workspace
 * OS: Unix
 * Command Line utilities: bzip2
 * Environment/Language: Node (Javascript)
 * DB: Cassandra? 
 * Other: Java Parser
 * Server/API: Express JS
 * 
 ##Java Parser

###Getting Started

Example:
`mvn -P matchend package`

This will compile both the parser source as well as the POJO (plain old java object), 
outputting an executable jar.

Note that 'matchend' is just an example. 
Walk throug the examples tree and you'll see several others. 
Also note that the examples require a relpay, which is not provided in this project.

The following executes the jar. 

`java -jar target/matchend.one-jar.jar <replay.dem>`
