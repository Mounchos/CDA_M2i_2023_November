<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER resultat"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#plusGrand #nombre1, nombre2" algoitem="FONCTION plusGrand (nombre1, nombre2)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="6#nombre1 > nombre2" algoitem="SI (nombre1 > nombre2) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#nombre1" algoitem="RENVOYER nombre1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="205#nombre2" algoitem="RENVOYER nombre2"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#n1" algoitem="n1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#n2" algoitem="n2 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat" algoitem="resultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le premier nombre: #0" algoitem="AFFICHER &quot;Entrez le premier nombre: &quot;"/>
        <item code="2#n1#pasliste" algoitem="LIRE n1"/>
        <item code="4#Entrez le second nombre: #0" algoitem="AFFICHER &quot;Entrez le second nombre: &quot;"/>
        <item code="2#n2#pasliste" algoitem="LIRE n2"/>
        <item code="5#resultat#plusGrand(n1, n2)#pasliste" algoitem="resultat PREND_LA_VALEUR plusGrand(n1, n2)"/>
        <item code="4#Le plus grand nombre est: #0" algoitem="AFFICHER &quot;Le plus grand nombre est: &quot;"/>
        <item code="3#resultat#0#pasliste" algoitem="AFFICHER resultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
