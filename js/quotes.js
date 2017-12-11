

function changequotes() 
	{
        
		var q1 ='"Edukacja informatyczna nie uczyni z kogokolwiek eksperta programisty w stopniu większym niż studiowanie pędzli i pigmentów zrobi z człowieka Picassa. - Eric S. Raymond"';
		var q2 = '"Biorąc pod uwagę aktualny, smutny stan naszych programów komputerowych, rozwijanie oprogramowania jest cały czas jeszcze czarną magią i nie może być jeszcze nazwane dziedziną inżynierii." - Bill Clinton';
		var q3= '"Jak ktoś mówi: Chciałbym języka programowania, w którym trzeba tylko powiedzieć, co się chce osiągnąć dajcie mu lizaka." - Alan J. Perlis';
		var q4= '"PHP jest małym złem popełnionym i stworzonym przez niekompetentnych amatorów, podczas gdy Perl jest wielkim i podstępnym złem popełnionym przez zręcznych, ale zdemoralizowanych profesjonalistów." - Jon Ribbens';
		var q5= '"Uczenie się programowania ma tyle samo wspólnego z tworzeniem interaktywnego oprogramowania, co uczenie bezwzrokowego pisania z tworzeniem poezji." - Ted Nelson';
		var q6= '"Jeśli McDonalds byłby zarządzany jak firma produkująca oprogramowanie, jeden na sto Big Maców byłby zatruty, a odpowiedzią byłoby przepraszamy, tu masz kupon na dwa następne." - Mark Minasi';
		var q7= '"Ludzie myślą, że informatyka jest dziedziną geniuszy, ale w rzeczywistości jest na odwrót - wielu ludzi robiących rzeczy bazujące na sobie - jak ściana z mini-kamieni" - Donald Knuth';
		
	var quotes = [q1, q2, q3, q4, q5, q6, q7];
        
	

	$(".rec p").fadeOut(4000, function() {
       $(".rec p").remove();
        var rand_quotes = quotes[Math.floor(Math.random() * quotes.length)];
        var txt3 =  $("<p></p>").text(rand_quotes);
        // or by using javascript
		//var txt3 = document.createElement("p");
  //  txt3.innerHTML = rand_quotes;    
		$(".rec").append(txt3);
        $(".rec p").attr('id', 'all_quotes').hide();
        $("#all_quotes").addClass("trn");
        checkcookies();
        $(".rec p").fadeIn(5000);
        
        
       
        
        
        
        
        
        
         
        
        
        
	});
        
        
        
 
	}
	