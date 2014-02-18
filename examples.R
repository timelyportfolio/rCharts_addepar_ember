#requires dev branch of rCharts
#require(devtools)
#install_github("rCharts","ramnathv",ref="dev")

require(rCharts)
#make a new rCharts object
aTable <- rCharts$new()
aTable$setLib("http://timelyportfolio.github.io/rCharts_addepar_ember")
aTable$templates$script = "./layouts/simple.hbs"

