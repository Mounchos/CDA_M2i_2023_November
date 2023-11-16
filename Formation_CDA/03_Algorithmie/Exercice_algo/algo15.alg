<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER sommeNote"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="note EST_DU_TYPE NOMBRE" code="1#NOMBRE#note"/>
        <item algoitem="moyenne EST_DU_TYPE NOMBRE" code="1#NOMBRE#moyenne"/>
        <item algoitem="minNote EST_DU_TYPE NOMBRE" code="1#NOMBRE#minNote"/>
        <item algoitem="maxNote EST_DU_TYPE NOMBRE" code="1#NOMBRE#maxNote"/>
        <item algoitem="sommeNote EST_DU_TYPE NOMBRE" code="1#NOMBRE#sommeNote"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="minNote PREND_LA_VALEUR 20" code="5#minNote#20#pasliste"/>
        <item algoitem="maxNote PREND_LA_VALEUR 0" code="5#maxNote#0#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 1 A 3" code="12#i#1#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Ecrire une note&quot;" code="4#Ecrire une note#0"/>
            <item algoitem="LIRE note" code="2#note#pasliste"/>
            <item algoitem="SI (note > maxNote) ALORS" code="6#note > maxNote">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="maxNote PREND_LA_VALEUR note" code="5#maxNote#note#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="SI (note &lt; minNote) ALORS" code="6#note &lt; minNote">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="minNote PREND_LA_VALEUR note" code="5#minNote#note#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="sommeNote PREND_LA_VALEUR sommeNote + note / 3" code="5#sommeNote#sommeNote + note / 3#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;La plus grande note est &quot;" code="4#La plus grande note est #0"/>
        <item algoitem="AFFICHER maxNote" code="3#maxNote#1#pasliste"/>
        <item algoitem="AFFICHER &quot;La plus petite note est &quot;" code="4#La plus petite note est #0"/>
        <item algoitem="AFFICHER minNote" code="3#minNote#1#pasliste"/>
        <item algoitem="AFFICHER &quot;La moyenne est de &quot;" code="4#La moyenne est de #0"/>
        <item algoitem="AFFICHER sommeNote" code="3#sommeNote#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
