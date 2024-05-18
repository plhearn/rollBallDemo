<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.4" name="collision" tilewidth="24" tileheight="24" tilecount="18" columns="6">
 <image source="tex/tile/collision24.png" width="144" height="72"/>
 <tile id="1">
  <properties>
   <property name="nez:isOneWayPlatform" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="2">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="23"/>
  </properties>
 </tile>
 <tile id="3">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="12"/>
  </properties>
 </tile>
 <tile id="4">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="12"/>
   <property name="nez:slopeTopRight" type="int" value="23"/>
  </properties>
 </tile>
 <tile id="7">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="7"/>
  </properties>
 </tile>
</tileset>
