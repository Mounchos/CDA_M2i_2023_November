<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL TOTAL = round(C *pow(1 + (T/100),N))" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="actif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#T" algoitem="T EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N" algoitem="N EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TOTAL" algoitem="TOTAL EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez indiquer le montant du capital#1" algoitem="AFFICHER &quot;Veuillez indiquer le montant du capital&quot;"/>
        <item code="2#C#pasliste" algoitem="LIRE C"/>
        <item code="4#Veuillez indiquer le taux fixe#1" algoitem="AFFICHER &quot;Veuillez indiquer le taux fixe&quot;"/>
        <item code="2#T#pasliste" algoitem="LIRE T"/>
        <item code="4#Veuillez indiquer le nombre d'années#1" algoitem="AFFICHER &quot;Veuillez indiquer le nombre d'années&quot;"/>
        <item code="2#N#pasliste" algoitem="LIRE N"/>
        <item code="4#Le gain est de #0" algoitem="AFFICHER &quot;Le gain est de &quot;"/>
        <item code="20#TOTAL = round(C *pow(1 + (T/100),N))#0" algoitem="AFFICHERCALCUL TOTAL = round(C *pow(1 + (T/100),N))"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
