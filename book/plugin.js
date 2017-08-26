require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind('start', function (e, config) {
    gitbook.toolbar.createButton({
      icon: 'fa fa-file-pdf-o',
      text: "下载PDF",
      onClick: function() {
        var bookpage = gitbook.page.getState()
        var bookroot = bookpage.bookRoot
        var filepath = bookpage.filepath
        if (!filepath.toLowerCase().endsWith('readme.md')) {
          window.open(bookroot+filepath.substring(0,filepath.lastIndexOf(".md")) + ".pdf")
        }
      }
    })
  })
})
