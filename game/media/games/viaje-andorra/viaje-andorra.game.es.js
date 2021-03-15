// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "ef7edfe0-75d7-11eb-8572-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuraci�n, que no haya efectos de jquery
jQuery.fx.off = false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
            "<h1>Viaje a Andorra</h1>\
				<p>Te despiertas un s�bado a las 2 del mediod�a.</p>",
            {
                enter: function (character, system, from) {
                    system.doLink('inicio');
                }

            }

    ),
    inicio: new undum.SimpleSituation(
        "<p>Lo primero que haces como siempre es mirar c�mo va tu canal de youtube</p>\
				<img class='img-situation' src='./media/img/inicio.jpg'>\
        <p>Resulta que ...  \
        <a href='mercadona'>va igual de mal que siempre</a>, o quiz�s tu video de c�mo hacer las mejores croquetas del mundo ha superado el <a href='croquetas'>mill�n de visitas</a> </p>"

    ),

    mercadona: new undum.SimpleSituation(
            "<h1>Fin de la historia</h1>\
        <img class='img-situation' src='./media/img/fin.jpeg'>\
			<p>Bajas al mercadona a por una pizza y prosigues tu aventura en Youtube, alg�n d�a conseguir�s tu meta.</p >\
			<h1>Fin</h1>"
            ),

    croquetas: new undum.SimpleSituation(
        "<h1>INCRE�BLE</h1>\
        <p> Tras esta situaci�n, tu reacci�n instant�nea es abrir <a href = 'https://www.idealista.com/alquiler-viviendas/andorra-provincia/'> idealista </a> y encontrar ofertas para comprar un piso en Andorra.</p>\
                <p>Obviamente, tambi�n grabas un video de 56s agradeciendo, mientras lloras, el apoyo a tus suscriptores.</p>\
                <p>Posteriormente decides encaminarte destino al para�so de tus sue�os, en busca de la compra tan ansiada, un pisito al lado del casopl�n de �ElRubius�.</p>\
                <p>Para ello decides ir en: \
        <a href='seat'>tu Seat Ibiza de 2002</a>, o puede que no te fies mucho al ser un trayecto bastante largo, entonces optas por un <a href='andorra' > taxi</a> </p>"
            ),

    seat: new undum.SimpleSituation(
        "<h1>Igual no es la mejor idea ...</h1>\
        <img class='img-situation' src='./media/img/ibiza.jpg'>\
        <p> Llevabas 5 a�os sin hacerle el mantenimiento al coche por lo que cuando vas a mitad de camino empieza a salir humo y te obliga a detenerte.  </p >\
       <p> Ante este estado no sabes muy bien c�mo reaccionar as� que al final: \
       <p>terminas llamando a la <a href='grua'>grua</a>, aunque quiz�s quieras desistir y acercarte a un <a href='burguer'>Burguer King</a>. </p>"
            ),

    autubus: new undum.SimpleSituation(
            "<p>Tras buscar por largo rato entre tus pertenencias, con voz que transmite poca tranquilidad dices a los guardias de la puerta:</p>\
			<p class='dialogo personaje'>- Fijaos que pertrech� mi montura con toda suerte de abalorios, m�s olvideme el calculatorum...</p>\
			<p>Ni que decir tiene, que los guardias pasan de ti y vuelven a su quehacer en el castillo.</p>\
			<p>En fin... <a href='santoysenia'>puedes intentarlo de nuevo</a> o <a href='finalizar'>finalizar la partida</a>.</p>s"
            ),

    grua: new undum.SimpleSituation(
            "<h1>Mala suerte ...</h1>\
        <img class='img-situation' src='./media/img/grua.jpg'>\
			<p>La grua finalmente te llevar� de vuelta a casa y no tendr�s m�s remedio que ir al <a href='mercadona'>Mercadona</a>.</p>s"
            ),

    burguer: new undum.SimpleSituation(
            "<h1>BURGUER KING</h1>\
        <img class='img-situation' src='./media/img/burguer.jpg'>\
        			<p>Llegas al Burguer King para comerte una gran hamburguesa despu�s de tu largo caminao, cuando terminas de com�rtela: \
        <p>Finalmente desistes y vuelves a casa, no sin antes pasarte por el  <a href = 'mercadona' > Mercadona</a >. Sin embargo ves un autob�s</p>\
        <p>que tiene la bandera de Andorra, <a href='andorra'>�deber�as montarte?</a></p > s"
            ),

    andorra: new undum.SimpleSituation(
            "<h1>LLEGADA A ANDORRA</h1>\
        <img class='img-situation' src='./media/img/andorra.jpg'>\
        <p>Finalmente despues de este largo camino consigues llegar a Andorra </p>  \
        <p>�Qu� te deparar� el futuro?</p>\
        <h1>CONTINUAR� ... </p>"
            ),


    incorrecta01: new undum.SimpleSituation(
            "<p>Tras buscar por largo rato entre tus pertenencias, con voz que transmite poca tranquilidad dices a los guardias de la puerta:</p>\
			<p class='dialogo personaje'>- Fijaos que pertrech� mi montura con toda suerte de abalorios, m�s olvideme el calculatorum...</p>\
			<p>Ni que decir tiene, que los guardias pasan de ti y vuelven a su quehacer en el castillo.</p>\
			<p>En fin... <a href='santoysenia'>puedes intentarlo de nuevo</a> o <a href='finalizar'>finalizar la partida</a>.</p>s"
            ),
    incorrecta02: new undum.SimpleSituation(
            "<p>Aunque no tienes ni idea de qu� es una escuela, ni de si se come o no, intentas ser convincente mientras dices:</p>\
			<p class='dialogo personaje'>- Fijaos que aun frecuentando continuamente las clases de maese V�ctor, \
			diose la circunstancia de que el d�a que tal explicaron hall�bame cuidando de mi lobo huargo.</p>\
	<p>Ni que decir tiene, que los guardias pasan de ti y vuelven a su quehacer en el castillo.</p>\
			<p>En fin... <a href='santoysenia'>puedes intentarlo de nuevo</a> o <a href='finalizar'>finalizar la partida</a>.</p>"
            ),

    finalizar: new undum.SimpleSituation(
            "<h1>Fin de la historia</h1>\
			<p>Otro d�a m�s que seguir�s sin convertirte en el mejor Youtuber.</p>\
			<h1>Fin</h1>"
            ),
    patiodearmas: new undum.SimpleSituation(
            "<h1>El patio de armas</h1>\
      <img class='img-situation' src='./media/img/patio-armas.jpg'>\
			<p>Est�s dentro del castillo, concretamente en el patio de armas</p>\
			<p>Los guardias se han quedado m�s tranquilos al saber que sabes el santo y se�a, as� que se han ido a dormir... je, je, je...</p>\
			<p>A tu izquierda, <a href='zonanoble'>puedes acceder a la zona noble del castillo</a>, \
			mientras a la derecha observas que est� <a href='caballerizas'>la entrada a las caballerizas</a>.</p>"
            , {
                enter: function (character, system, from) {
                    $('body').css('background-image', 'url(./media/img/titulo.jpg)')
                }
            }
    ),
    zonanoble: new undum.SimpleSituation(
            "<h1>La zona noble del castillo</h1>\
			<p>En este ala de la fortaleza se desarrolla la vida palaciega, ya sabes: la cocina, el comedor, los aposentos, el gimnasio con spa\
			y la terraza donde se ubican las placas solares... quiero decir, el solarium.</p>",
            {
                enter: function (character, system, from) {
                    if (character.qualities.antorcha) {
                        system.doLink("zonanobleantorcha");
                    } else {
                        $('body').css('background-image', 'url(https://bangbranding.com/blog/wp-content/uploads/2016/11/350x500_destacada-1.jpg')
                        system.write("<p>No obstante, existe un peque�o problema y es que el arquitecto \
						en un intento por llevar a cabo la m�xima expresi�n del minimalismo, \
						minimiz� todas las ventanas (vamos: que se olvid� poner ventanas en las paredes)\
						y dado que no tienes ninguna fuente de luz, no ves ni un pimiento.</p>\
						<p>No tienes muchas opciones, salvo las de quedarte aqu� esperando o bien <a href='patiodearmas'>salir al patio de armas</a>.</p>");
                    }
                }
            }
    ),

    zonanobleantorcha: new undum.SimpleSituation(
            "<p>El insignificante error cometido por el arquitecto al no colocar ni una sola ventana\
					no es problema para ti que te has procurado una antorcha.</p>\
					<p class='transient'>Analizas la estancia y compruebas que existe una puerta en la pared norte\
					<a href='aposentos'>que te lleva a los aposentos reales</a>.</p>\
					<p class='transient'>Otra opci�n es pasar del tema, que ya se te va haciendo tarde y <a href='patiodearmas'>volver por donde\
					has venido</a>.</p>"
            , {
                enter: function (character, system, from) {
                    $('body')
                            .css('background-image', 'url(https://media-cdn.tripadvisor.com/media/photo-s/06/55/90/7a/castillo-de-neuschwanstein.jpg)')
                            .css('background-size', 'cover')
                }
            }
    ),
    caballerizas: new undum.SimpleSituation(
            "<h1>Las caballerizas</h1>\
			<p>El establo es el lugar ideal para encontrar caballos... ��y todo tipo de enseres!! \
			Ya se sabe, empieza uno con el castillo bien ordenadito, y terminas guardando aqu� todo lo que no te hace falta.</p>\
			<p>No obstante, quiz� haya algo que te venga bien y que desees coger: \
			una <a href='./silladeplaya' class='once'>silla de la playa</a>, un <a href='./spectrum' class='once'>Spectrum +2 128 megas</a>, \
			una <a href='./antorcha' class='once'>antorcha</a>, un <a href='./latigo' class='once'>espl�ndido l�tigo</a> de cuero negro, un <a href='./sombrero'  class='once'>sombrero mejicano</a> del anciano Ser Rodrick, el <a href='./tioserrodrick' class='once'>propio Ser Rodrick</a>...</p>\
			<p>Esta estancia es grande, pero s�lo tiene una puerta de entrada y salida por la que accedes, nuevamente, <a href='patiodearmas'>al patio de armas</a>.</p>\
		",
            {
                actions: {
                    'silladeplaya': function (character, system, action) {
                        system.setCharacterText("<p>Ahora ya llevas una silla de playa. \
																														Te vendr� bien cuando encuentres...eh... una playa.</p>");
                    },
                    'spectrum': function (character, system, action) {
                        system.setCharacterText("<p>�Qu� buenos salieron los Spectrum! \
																													Este todav�a funciona.. de hecho, est� sin estrenar.\
																													La ausencia de enchufes en esta �poca podr�a estar \
																													relacionada con tal estado.</p>");
                    },
                    'latigo': function (character, system, action) {
                        system.setCharacterText("<p>�Un l�tigo puede salvarte de mil apuros! \
																													Aunque por desgracia, esta aventura no est� ambientada en \
																													el personaje de Indiana Jones, por lo que te va a servir de bien poco.</p>");
                    },
                    'sombrero': function (character, system, action) {
                        system.setCharacterText("<p>Te quitas el yelmo y te colocas el sombrero mejicano.\
																													Sientes un irrefrenable deseo de cantar \
																													rancheras, pero sabes que sin tu yelmo \
																													eres m�s vulnerable al impacto de las hortalizas.</p>");
                    },
                    'tioserrodrick': function (character, system, action) {
                        system.setCharacterText("<p>La compa��a de Ser Rodrick te har� m�s agradable el camino...\
																		 o no, teniendo en cuenta	que muri� hace m�s de 200 a�os.</p>");
                    },
                    'antorcha': function (character, system, action) {
                        system.setQuality("antorcha", true);
                        system.setCharacterText("<p>Perfecto. Ahora tienes una antorcha con la que podr�s iluminar \
																						las oscuras estancias de la zona noble</p>");
                    }

                }
            }
    ),
    aposentos: new undum.SimpleSituation(
            "<h1>Los reales aposentos</h1>\
			<p>Aunque nadie habr�a dado un duro por que alcanzaras este punto, lo cierto es que aqu� est�s.</p>\
			<p>Claro que... esto no va a ser coser y cantar, <em>of course</em>. Dos escaleras justo ante t� dan acceso\
			a las dos alcobas de que dispone el castillo (en principio se proyectaron 65 estancias, pero un peque�o error \
			del arquitecto hizo que se redujeran... eh... considerablemente).</p>\
			<p class='transient'>Una vez analizada la situaci�n, es evidente que s�lo puedes \
			<a href='habrey'>subir a la alcoba de la escalera que queda a la izquierda</a>\
			o, por el contrario, <a href='habprincesa'>subir a la alcoba que quedar�a a tu derecha</a>. Por supuesto, otras opciones son \
			<a href='./echar-vistazo' class='once'>echar un vistazo</a> a la estancia en la que est�s, o \
			volver a la entrada <a href='zonanoble'>de la zona noble</a>.</p>",
            {
                actions: {
                    'echar-vistazo': function enter(character, system, action) {
                        system.setQuality("llave", true);
                        system.write("<p>Mirando detalladamente, observas que en la pared sur de la estancia hay un majestuoso cuadro \
							de Bob Esponja y, casi sin darte cuenta, te acercas y palpas por detr�s del mismo. Gracias a tu delicado tacto \
							descubres una enorme llave de puerta de aposento, que guardas como preciado tesoro para futuros usos.</p>\
							<p class='transient'>Con la llave en tu poder, vuelves a hacer un an�lisis de la situaci�n y \
							nuevamente concluyes que s�lo puedes \
							<a href='habrey'>subir a la alcoba de la escalera que queda a la izquierda</a>\
							o, por el contrario, <a href='habprincesa'>subir a la alcoba que quedar�a a tu derecha</a>.\
							Huelga decir que puedes <a href='./echar-otro-vistazo'>seguir explorando</a> esta estancia o \
							volver a la entrada <a href='zonanoble'>de la zona noble</a>.</p>");
                        system.setCharacterText("<p>�Perfecto! Te has hecho con una llave que puede abrirte el coraz�n de tu princesa... \
																						o al menos su alcoba.</p>");
                    },
                    'echar-otro-vistazo': "<p>La colecci�n de cuadros de la estancia es, simplemente, impresionante. De hecho, te impresiona que \
							en un castillo tan grande s�lo haya un simple cuadro y que �ste sea de Bob Esponja.</p>\
							<p class='transient'>Puedes seguir perdiendo el tiempo en esta estancia o \
							<a href='habrey'>subir a la alcoba de la escalera que queda a la izquierda</a>, \
							<a href='habprincesa'>subir a la alcoba que quedar�a a tu derecha</a> o \
							volver a la entrada <a href='zonanoble'>de la zona noble</a>.</p>"
                }
            }
    ),
    habrey: new undum.SimpleSituation(
            "<h1>El aposento de la izquierda</h1>\
			<p>Tras subir las escaleras que quedaban a tu izquierda, accedes a uno de los aposentos... o m�s bien, a la puerta del mismo.\
			Con tiento y cuidado, intentas hacer girar el picaporte y te das cuenta de que la puerta est� cerrada con llave.</p>",
            {
                enter: function (character, system, from) {
                    if (character.qualities.llave) {
                        system.doLink("habreyllave");
                    } else {
                        system.doLink("habnollave");
                    }
                }
            }
    ),
    habreyllave: new undum.SimpleSituation(
            "<p>Con suma destreza, gran sigilo y la llave que te agenciaste, consigues abrir la puerta y entras cautelosamente en la estancia.</p>\
			<p>Al fondo, a la derecha, observas que hay un lecho en el que alguien duerme placenteramente; te acercas\
			<a href='./discurso' class='once'> e inicias el peque�o\
			discurso</a> que tantos meses llevas preparando:</p>",
            {
                actions: {
                    'discurso': "<p class='dialogo personaje'>- �La princesa est� dormida! �A qu� hora se habr� acostado la princesa?<br/>\
			�Mi bien, mi sol, mi estrella, mi planeta, mi sat�lite, mi polvo espacial, mi agujero negro, mi bos�n de Higgs!\<br/>\
			Si de tu dulce boca a bien tuvieras susurrar palabras que alentaran el coraz�n de este, vuestro humilde servidor, \
			ante los antiguos dioses y tambi�n ante los modernos, amor sin par os jurar�a. Un amor puro, cual no hubo ni habr�; \
			un amor del cual se forjar�n leyendas; un amor que durar� toda la eternidad, o en su defecto hasta que amanezca.<br/>\
			Decidme, mi peque�o pastel de fresa con guinda de chocolate: �me am�is?</p>\
			<p>Al tiempo que terminas tu discurso, una enorme figura de 150 kilos se gira en la cama, y su barbuda cara se\
			acerca a la tuya para decir:</p>\
			<p class='dialogo'><strong>- ��A m� la guardia!!</strong></p>\
			<p>Efectivamente: estabas en la habitaci�n del rey, no la de la princesa.</p>\
			<p>Sin saber muy bien de donde, aparece la guardia personal del rey que, con sus caracter�sticas dulzura y\
			amabilidad te invita <a href='calabozo'>a pudrirte en el calabozo</a>.</p>"
                }
            }

    ),
    habnollave: new undum.SimpleSituation(
            "<p><strong>��L�stima que no tengas ninguna llave!!</strong></p>\
			 <p>Pero una vez que has llegado hasta aqu�, no vas a cejar en tu empe�o por unos m�seros gramos de metal.</p>\
			<p class='transient'>Tras meditarlo unos instantes, decides que tus opciones son <a href='./llamar-puerta' class='once'>llamar a la puerta de la habitaci�n</a>\
			(en plan <a href='https://www.youtube.com/watch?v=rnKbImRPhTE' class='raw' target='_new'>Bob Dylan</a>),\
			<a href='./punta-lanza'  class='once'>probar a abrir la cerradura</a> con la punta de tu lanza</a> (cuentan las leyendas \
			que una vez hace tiempo a alguien le funcion�), <a href='./empujar'  class='once'>dar un fuerte empuj�n a la puerta</a> cual si fueras Harry el sucio o <a href='aposentos'  class='once'>volver hacia atr�s sin hacer ruido</a>.</p>",
            {
                actions: {
                    'llamar-puerta': function (character, system, action) {
                        system.write('<p>Aunque intentas hacer el m�nimo ruido posible, tus golpes en la puerta se escuchan en todo \
														el castillo... de hecho, se escuchan en toda la comarca.</p>\
														<p>S�bitamente (siempre quise decir esta palabra) aparecen cientos de miles de soldados de \
														la guardia real, los cuales te arrestan y te llevan al calabozo donde dormir�s el sue�o de los justos.</p>\
													<p class="transient">Siento decirte que no tienes m�s opci�n que \
													<a href="calabozo">seguirlos al calabozo</a>.</p>');
                    },
                    'punta-lanza': function (character, system, action) {
                        system.write('<p>Sin tener en cuenta que nunca has intentado, ni por tanto conseguido, abrir una cerradura con tu lanza\
													te lanzas (nunca mejor dicho) a la ardua tarea de romper el c�digo por el m�todo de la fuerza bruta.</p> \
													<p>Tras apenas dos horas de esfuerzo, te das cuenta de que no lo vas a conseguir, y desistes del plan.</p>\
													<p>Por desgracia para ti, los sensores de movimiento de lanzas del castillo han dado la alerta a la guardia \
													real, que hace cosa as� de 30 minutos que est� parti�ndose de risa viendo como te peleas con la cerradura.</p>\
													<p>Finalmente, se impone su profesionalidad, y te arrestan llev�ndote al calabozo, donde podr�s seguir\
													practicando el arte de la criptolanzograf�a...vamos, intentando abrir cerraduras con lanzas.</p>\
													<p class="transient">Siento decirte que no tienes m�s opci�n que \
													<a href="calabozo">seguirlos al calabozo</a>.</p>');
                    },
                    'empujar': function (character, system, action) {
                        system.write('<p>Con ardoroso �mpetu e impetuoso ardor, das seis pasos hacia atr�s, abres decididamente las piernas, \
						y colocas los brazos pegados a los costados con los pu�os apretados hacia abajo, mientras miras fijamente la pelota... \
						eh... la puerta.</p>\
						<p>Al grito de \'Viva mi madre\' te lanzas contra la puerta con la certeza de que en breves instantes el duro e \
						impenetrable material quedar� reducido a a�icos...<strong>��Y as� es!!</strong>... al menos para los huesos \
						que forman tu hombro, brazo y antebrazo, porque lo que es la puerta apenas si consigue un ara�azo.</p>\
						<p>El enorme estruendo que has formado, s�lo superado por el estent�reo grito con el que has iniciado la carga, \
						pone en alerta al numeroso ej�rcito de la guardia real que, como por encantamiendo, surge para apresarte y \
						llevarte al calabozo, donde dispondr�s de toda una vida para pensar c�mo es posible que una puerta de roble macizo, \
						con marco de hierro y atrancada tanto por dentro como por fuera no haya cedido ante tu furioso ataque.</p>\
						<p class="transient">Siento decirte que no tienes m�s opci�n que \
						<a href="calabozo">seguirlos al calabozo</a>.</p>');
                    }

                }
            }
    ),

    habprincesa: new undum.SimpleSituation(
            "<h1>El aposento de la derecha</h1>\
			<p>Tras subir las escaleras que quedaban a tu derecha, accedes a uno de los aposentos... o m�s bien, a la puerta del mismo.\
			Con tiento y cuidado, intentas hacer girar el picaporte y te das cuenta de que la puerta est� cerrada con llave.</p>",
            {
                enter: function (character, system, from) {
                    if (character.qualities.llave) {
                        system.doLink("habprincesallave");
                    } else {
                        system.doLink("habnollave");
                    }
                }
            }
    ),
    habprincesallave: new undum.SimpleSituation(
            "<p>Con suma destreza, gran sigilo y la llave que te agenciaste, consigues abrir la puerta y entras cautelosamente en la estancia.</p>\
			<p>Al fondo, a la derecha, observas que hay un lecho en el que alguien duerme placenteramente; te acercas\
			<a href='./discurso' class='once'> e inicias el peque�o\
			discurso</a> que tantos meses llevas preparando:</p>",
            {
                actions: {
                    'discurso': function (character, system, action) {
                        system.write("<p class='dialogo personaje'>- �La princesa est� dormida! �A qu� hora se habr� acostado la princesa?<br/>\
			�Mi bien, mi sol, mi estrella, mi planeta, mi sat�lite, mi polvo espacial, mi agujero negro, mi bos�n de Higgs!\<br/>\
			Si de tu dulce boca a bien tuvieras susurrar palabras que alentaran el coraz�n de este, vuestro humilde servidor, \
			ante los antiguos dioses y tambi�n ante los modernos, amor sin par os jurar�a. Un amor puro, cual no hubo ni habr�; \
			un amor del cual se forjar�n leyendas; un amor que durar� toda la eternidad, o en su defecto hasta que amanezca.<br/>\
			Decidme, mi peque�o pastel de fresa con guinda de chocolate: �me am�is?</p>\
			<p>Al tiempo que terminas tu discurso, una enorme figura de 150 kilos se gira en la cama, y su barbuda cara se\
			acerca a la tuya para decir:</p>\
			<p class='dialogo'><strong>- ��Eres t� mi pr�ncipe azul que yo so��!!</strong></p>\
			<p>Efectivamente: has acertado en la habitaci�n de la princesa; no obstante y as�, como el que no quiere la cosa, \
			recuerdas que hab�as quedado con los se�ores de Oto�olandia para jugaros vuestras tierras al padel.</p>\
			<p>De esa forma, antes de que la princesa pueda seguir con su gr�cil canto, le sueltas de golpe y porrazo toda la \
			teor�a que aprendiste en clase de Programaci�n Orientada a Objetos consiguiendo que tu bella dama caiga de nuevo \
			en brazos de Morfeo... el cual a duras penas puede sujetarla. Mientras ella duerme, t� sales precipitadamente del castillo.</p>");
                        system.doLink('happyend');
                    }
                }
            }),

    happyend: new undum.SimpleSituation(
            "<h1>Final feliz</h1>\
			<p>Y as� acaba esta caballeresca aventura: entraste al castillo, recuperaste los objetos necesarios y juraste tu amor \
			eterno a la hermosa... a la dama...</p>\
			<p>Tu heroica figura avanza hacia el poniente, mientras el anaranjado sol desdibuja sombras p�rpuras a tu espalda y \
			entonces comprendes a qu� hacen referencia cuando hablan de la soledad del poder. En este caso, no obstante, t� \
			agradeces el poder volver en soledad.</p>\
			<p>En realidad, el camino del castillo deber�a estar jalonado de promociones de chalets y urbanizaciones con piscina, pero \
			debido a un peque�o error del arquitecto ... bla, bla, bla.</p>\
			<h1>�Fin</h1>"
            )
};


// Ejemplo de declaraci�n separada
undum.game.situations["calabozo"] = new undum.SimpleSituation(
        "<h1>Calabozo</h1>\
			<p>En el proyecto original del arquitecto, el calabozo era con diferencia la sala m�s grande del castillo.</p>\
			Estaba formado por tres estancias comunicadas entre si por aperturas di�fanas. La primera estancia conten�a una\
			completa cocina, con dos ambientes separados que distingu�an la zona de trabajo del <em>living</em>.\
			La segunda, a�n mayor, era el recinto seleccionado para incluir un ba�o completo con jacuzzi, sauna turca y ducha\
			de aromas. Finalmente, la tercera, albergaba una habitaci�n de estilo colonial cuya principal \
			joya era la c�moda cama <em>king size</em>, autocalefactable.</p>\
			<p>Desgraciadamente, en un peque�o despiste del ayudante del arquitecto, los planos dieron a parar al foso de los cocodrilos.\
			Por m�s que el pobre muchacho se afan� en convencer a los reptiles de que soltaran de sus fauces los importantes pergaminos,\
			el resultado fue nulo.</p>\
			<p>Finalmente, se opt� por hacer un profundo agujero en la tierra que hiciera las funciones de calabozo. \
			Por supuesto, era una soluci�n temporal... por lo que es lo �nico del castillo que sigue intacto tras varios siglos.</p>\
			<p>Por tanto aqu� acaba tu aventura. Fue un notable intento, pero has acabado con tus huesos \
			en el calabozo por los siglos de los siglos.</p>\
			<h1>Fin</h1>"
        );

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    antorcha: new undum.OnOffQuality(
            "Antorcha", {priority: "0001", group: 'inventario', onDisplay: "&#10003;"}
    ),
    llave: new undum.OnOffQuality(
            "Llave", {priority: "0002", group: 'inventario', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority: "0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    system.setQuality("antorcha", false)
    system.setQuality("llave", false)
    system.setCharacterText("<p>�Comienzas tu fascinante aventura!</p>");
};