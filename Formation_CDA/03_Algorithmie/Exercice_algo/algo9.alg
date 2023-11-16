<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; an(s) pour doubler le capital&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" epaisseurLigne="2" totalBoucles="5000000" maxBoucle="500000" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="c EST_DU_TYPE NOMBRE" code="1#NOMBRE#c"/>
        <item algoitem="t EST_DU_TYPE NOMBRE" code="1#NOMBRE#t"/>
        <item algoitem="cfinal EST_DU_TYPE NOMBRE" code="1#NOMBRE#cfinal"/>
        <item algoitem="nbannées EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbannées"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez saisir le capital initial&quot;" code="4#Veuillez saisir le capital initial#0"/>
        <item algoitem="LIRE c" code="2#c#pasliste"/>
        <item algoitem="AFFICHER &quot;Veuillez saisir le taux: &quot;" code="4#Veuillez saisir le taux: #0"/>
        <item algoitem="LIRE t" code="2#t#pasliste"/>
        <item algoitem="t PREND_LA_VALEUR t/100" code="5#t#t/100#pasliste"/>
        <item algoitem="TANT_QUE (cfinal &lt; c * 2) FAIRE" code="15#cfinal &lt; c * 2">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="nbannées PREND_LA_VALEUR nbannées + 1" code="5#nbannées#nbannées + 1#pasliste"/>
            <item algoitem="cfinal PREND_LA_VALEUR round(c * pow(1+t, nbannées))" code="5#cfinal#round(c * pow(1+t, nbannées))#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Il faudra &quot;" code="4#Il faudra #0"/>
        <item algoitem="AFFICHER nbannées" code="3#nbannées#0#pasliste"/>
        <item algoitem="AFFICHER &quot; an(s) pour doubler le capital&quot;" code="4# an(s) pour doubler le capital#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
