<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_POUR"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="j EST_DU_TYPE NOMBRE" code="1#NOMBRE#j"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="j PREND_LA_VALEUR 1" code="5#j#1#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 1 A 10" code="12#i#1#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (j &lt;= 10) ALORS" code="6#j &lt;= 10">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="SI (i == 1) ALORS" code="6#i == 1">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;----------&quot;" code="4#----------#1"/>
                    <item algoitem="AFFICHER &quot;Table de &quot;" code="4#Table de #0"/>
                    <item algoitem="AFFICHER j" code="3#j#1#pasliste"/>
                    <item algoitem="AFFICHER &quot;----------&quot;" code="4#----------#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                </item>
                <item algoitem="SI (i &lt; 10) ALORS" code="6#i &lt; 10">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER j" code="3#j#0#pasliste"/>
                    <item algoitem="AFFICHER &quot; x &quot;" code="4# x #0"/>
                    <item algoitem="AFFICHER i" code="3#i#0#pasliste"/>
                    <item algoitem="AFFICHER &quot; = &quot;" code="4# = #0"/>
                    <item algoitem="AFFICHERCALCUL j*i" code="20#j*i#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="AFFICHER j" code="3#j#0#pasliste"/>
                        <item algoitem="AFFICHER &quot; x &quot;" code="4# x #0"/>
                        <item algoitem="AFFICHER i" code="3#i#0#pasliste"/>
                        <item algoitem="AFFICHER &quot; = &quot;" code="4# = #0"/>
                        <item algoitem="AFFICHERCALCUL j*i" code="20#j*i#1"/>
                        <item algoitem="j PREND_LA_VALEUR j + 1" code="5#j#j + 1#pasliste"/>
                        <item algoitem="i PREND_LA_VALEUR 0" code="5#i#0#pasliste"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="i PREND_LA_VALEUR 10" code="5#i#10#pasliste"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
