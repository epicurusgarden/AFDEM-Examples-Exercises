$(function() {
  $(".eventTargetParagraph, p, ul, li").click(function(event) {
    event.stopPropagation();
    $("h2").text(
      "event.currentTarget's text is: " + $(event.currentTarget).text()
    );
  });
});
