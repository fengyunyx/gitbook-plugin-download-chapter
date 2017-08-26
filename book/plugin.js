require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind('start', function (e, config) {
    gitbook.toolbar.createButton({
      icon: 'fa fa-file-pdf-o',
      text: "下载PDF",
      onClick: function() {
        var bookpage = gitbook.page.getState()
        var bookroot = bookpage.bookRoot
        var filepath = bookpage.filepath
        var filepath_part0 = filepath.substring(0,filepath.lastIndexOf("/"))
        var filepath_part1 = filepath.substring(filepath.lastIndexOf("/"))
        if (!filepath_part1.toLowerCase().endsWith('readme.md')) {
          window.open(bookroot+filepath_part0 +"/assets"+ filepath_part1.substring(0,filepath_part1.lastIndexOf(".md")) + ".pdf")
        }
      }
    })
  })
})
