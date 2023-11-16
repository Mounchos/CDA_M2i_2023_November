<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Correct!&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Ecrivez un nombre entre 1 et 3#0" algoitem="AFFICHER &quot;Ecrivez un nombre entre 1 et 3&quot;"/>
        <item code="2#a#pasliste" algoitem="LIRE a"/>
        <item code="15#a &lt; 1 ou a > 3" algoitem="TANT_QUE (a &lt; 1 ou a > 3) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Réessayez un nombre compris entre 1 et 3#1" algoitem="AFFICHER &quot;Réessayez un nombre compris entre 1 et 3&quot;"/>
            <item code="2#a#pasliste" algoitem="LIRE a"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Correct!#0" algoitem="AFFICHER &quot;Correct!&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
