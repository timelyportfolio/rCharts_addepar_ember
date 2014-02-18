#requires dev branch of rCharts
#require(devtools)
#install_github("rCharts","ramnathv",ref="dev")

require(rCharts)
#make a new rCharts object
rChartsAddepar <- setRefClass("rChartsAddepar",
  contains = "rCharts",
  methods = list(
    initialize = function(){
      callSuper(); 
    },
    render = function (chartId = NULL, cdn = F, static = T, standalone = F) {
        params$dom <<- chartId %||% params$dom
        template = read_template(getOption("RCHART_TEMPLATE", templates$page))
        assets = Map("c", get_assets(LIB, static = static, cdn = cdn, 
           standalone = standalone), html_assets)
        html = render_template(template, list(params = params, assets = assets, 
                    chartId = params$dom, script = .self$html(params$dom), 
                    CODE = srccode, lib = LIB$name, tObj = tObj, container = container), 
                    partials = list(chartDiv = templates$chartDiv))
        html = gsub(
          x = html,
          pattern  = "</body>",
          replacement = paste0(
            templates$afterScript,
            '
            </body>
            '
          )
        )
  })
)
aTable <- rChartsAddepar$new()
aTable$setLib("http://timelyportfolio.github.io/rCharts_addepar_ember")
aTable$setTemplate(
  afterScript=""
)

aTable
