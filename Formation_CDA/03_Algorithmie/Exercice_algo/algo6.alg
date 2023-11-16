<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER Taille_vetement" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Poids" algoitem="Poids EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Taille" algoitem="Taille EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Taille_vetement" algoitem="Taille_vetement EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez la taille en cm: #1" algoitem="AFFICHER &quot;Entrez la taille en cm: &quot;"/>
        <item code="2#Taille#pasliste" algoitem="LIRE Taille"/>
        <item code="4#Entrez le poids en kg: #1" algoitem="AFFICHER &quot;Entrez le poids en kg: &quot;"/>
        <item code="2#Poids#pasliste" algoitem="LIRE Poids"/>
        <item code="6#Poids >= 43 ET Poids &lt;= 47" algoitem="SI (Poids >= 43 ET Poids &lt;= 47) ALORS"/>
        <item code="6#Taille >= 145 et Taille &lt;= 183" algoitem="SI (Taille >= 145 et Taille &lt;= 183) ALORS"/>
        <item code="3#Taille_vetement#0#pasliste" algoitem="AFFICHER Taille_vetement"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
