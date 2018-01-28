$(function() {
  let cardA = null;
  let idA = null;
  let cardB = null;
  let idB = null;
  let count = 0;
  let tags = [ 'neo', 'neo', 
              'trinity', 'trinity',
              'morpheus', 'morpheus',
              'merovingian', 'merovingian',
              'twins', 'twins',
              'oracle', 'oracle',
              'architect', 'architect',
              'smith', 'smith',
              'niobi', 'niobi',
              'linnix', 'linnix',
              'cornel', 'cornel',
              'seraph', 'seraph'
            ];

  function shuffle(arr) {
    var random;
    var temp;
    var i = arr.length - 1;
    while (i > 0) {
        random = Math.floor(Math.random() * (i+1));
        temp = arr[random];
        arr[random] = arr[i];
        arr[i] = temp;
        i--;
    }
    return arr;
  }          

  let shuffled = shuffle(tags);

  $('.card').each((i, val) => {
    $(val).addClass(shuffled[i]);
  });

  $(".card").on("click", function() {

    $(".counter").text(++count);
    $(this).toggleClass('flipped');
    if (cardA === null) {
      cardA = $(this).attr('class');
      idA = "#" + $(this).attr('id');
      console.log('cardA is ' + cardA);
    } else if (cardB === null) {
      cardB = $(this).attr('class');
      idB = "#" + $(this).attr('id');
      console.log('cardB is ' + cardB);
    }
    if (cardA !== null && cardB !== null) {
      // if cards match,
      if (cardA === cardB) {
        // remove the event listner from both cards so they stay up
        $(idA).off('click');
        $(idB).off('click');
        cardA = null;
        idA = null;
        cardB = null;
        idB = null;
      } else {
      // if cards DON'T match,
        // toggle the class of both cards after 1s,        
        setTimeout(function() {
          console.log(idA, idB)
          $(idA).toggleClass('flipped');
          $(idB).toggleClass('flipped');
          cardA = null;
          idA = null;
          cardB = null;
          idB = null;
        }, 1000);
      } 
    }
  })

})

