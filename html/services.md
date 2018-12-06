
### Web enabled sites and services running in docker (swarm)
| Service Name | Link | *=proxy | Source | Notes |
|  ----        |----- | ------- | ------ | ----- |
| mqtt             | [mqtt.dm.marine.ie](//mqtt.dm.marine.ie)<br>[mqtt.marine.ie](//mqtt.marine.ie) |   | TODO: put on github | This is just the website, running in nginx |
| kafakamqtt       | N/A                                                                            |   | [mosca](https://github.com/IrishMarineInstitute/mosca) | Based on mosca |
| compass          | [compass.dm.marine.ie](//compass.dm.marine.ie)                                 |   | TODO: put on github | A website to demonstrate charts for the compass project |
| weather          | [weather.dm.marine.ie](//weather.dm.marine.ie)                                 |   | [DasPOC](https://github.com/IrishMarineInstitute/DasPOC) | weewx with rinvile rooftop airmar TODO: put on own project |
| dashboard        | [dashboard.sysadmin.dm.marine.ie](//dashboard.sysadmin.dm.marine.ie)           |   | [uwobs](https://github.com/IrishMarineInstitute/uwobs) |TODO: move to own project on github | 
| streamsets       | [streamsets.dm.marine.ie](//streamsets.dm.marine.ie)                           | * | | TODO: talk to Damian about it |
| vector           | [vector.sysadmin.dm.marine.ie](//vector.sysadmin.dm.marine.ie)                 |   | TODO: put on github | Vanilla build of vector in Docker |
| dm               | [dm.marine.ie](//dm.marine.ie)                                                 |   | TODO: Put on github | This page |
| nodered01        | [nodered01.dm.marine.ie](//nodered01.dm.marine.ie)                             |   | TODO: put on github | Variety of flows TODO: move to separate node-red instances |
| noderedairmar    | [noderedairmar.dm.marine.ie](//noderedairmar.dm.marine.ie)                     |   | TODO: put on github | Flows for airmar weather station |
| noderedais       | [noderedais.dm.marine.ie](//noderedais.dm.marine.ie)                           |   | TODO: put on github | Flows for ais |
| noderedwavebuoys | [noderedwavebuoys.dm.marine.ie](//noderedwavebuoys.dm.marine.ie)               |   | TODO: put on github | Flows for wave buoys|
| node-red         | [node-red.dm.marine.ie](//node-red.dm.marine.ie)                               | * | TODO: put in git | Variety of flows to be moved |
| gconode03        | [gconode03.dm.marine.ie](//gconode03.dm.marine.ie)                             | * | TODO: put in git | Node-red with various flows (TODO: split out ) at spiddal shore station |
| belmullet2tcp    | N/A                                                                            |   | TODO: put in git | Access via tcp dm.marine.ie:port??? |
| rinvilleaiskplex | N/A                                                                            |   | TODO: put in git | Access via tcp dm.marine.ie:2101 |
| registry         | N/A                                                                            |   | [docs.docker.com/registry/](https://docs.docker.com/registry/) | local docker registry |
| traefik          | N/A                                                                            |   | [hub.docker.com/_/traefik/](https://hub.docker.com/_/traefik/) | http proxy in swarm |

Note an asterisk * indicates that only a http proxy service is running in swarm. In that case, the service lives elsewhere.

### Service Exposed on the Monitoring Dashboard
These are (legacy) data collection microservices running at spiddal shore station, not yet migrated to node-red
All are accessible through proxies; source code is in [uwobs](https://github.com/IrishMarineInstitute/uwobs/

| Service Name | Link | Notes |
|  ----        |----- | ----- |
| ais2file     | [ais2file.dm.marine.ie](//ais2file.dm.marine.ie)                                                                   | |
| audio        | [audio.spidvid.dm.marine.ie](//audio.spidvid.dm.marine.ie)                                                         | |
| fluorometer  | [fluorometer.gconode01.dm.marine.ie](//fluorometer.gconode01.dm.marine.ie)                                         | |
| vemco        | [vemco.gconode01.dm.marine.ie](//vemco.gconode01.dm.marine.ie)                                                     | |
| ctd          | [ctd.gconode01.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=ctd.gconode01.dm.marine.ie&hostspec=localhost) | |

### Performance Co Pilot
These are links used by [vector](//vector.sysadmin.dm.marine.ie) in the [monitoring dashboard](//dashboard.sysadmin.dm.marine.ie)

Each is a haproxy configuration to the corresponding backend service (pcp-web). Unfortunately pcp won't install on the new dmdock0* servers

| Service Name | Link | Notes |
|  ----        |----- | ----- |
| cassandra01  | [cassandra01.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra01.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra02  | [cassandra02.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra02.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra03  | [cassandra03.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra03.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra04  | [cassandra04.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra04.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra05  | [cassandra05.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra05.pcp.dm.marine.ie&hostspec=localhost) | |
| cluster02    | [cluster02.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cluster02.pcp.dm.marine.ie&hostspec=localhost) | |
| cluster03    | [cluster03.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cluster03.pcp.dm.marine.ie&hostspec=localhost) | |
| cluster04    | [cluster04.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cluster04.pcp.dm.marine.ie&hostspec=localhost) | |
| cluster05    | [cluster05.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cluster05.pcp.dm.marine.ie&hostspec=localhost) | |
| dockerub     | [dockerub.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=dockerub.pcp.dm.marine.ie&hostspec=localhost) | |
| gconode01    | [gconode01.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=gconode01.pcp.dm.marine.ie&hostspec=localhost) | |
| kafka01      | [kafka01.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=kafka01.pcp.dm.marine.ie&hostspec=localhost) | |
| kafka02      | [kafka02.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=kafka02.pcp.dm.marine.ie&hostspec=localhost) | |
| kafka03      | [kafka03.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=kafka03.pcp.dm.marine.ie&hostspec=localhost) | |
| spidvid      | [spidvid.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=spidvid.pcp.dm.marine.ie&hostspec=localhost) | |

### Other Services Proxied through dm.marine.ie

| Service Name | Link | Notes |
|  ----        |----- | ----- |
| rundeck      | [rundeck](//rundeck.dm.marine.ie)                          | Need to migrate off cluster05. Big Job (RF) |
| synology     | [synology.dm.marine.ie](//synology.dm.marine.ie)           | Does anybody use this link? Or delete it |
| kibana       | [kibana.dm.marine.ie](//kibana.dm.marine.ie) (not working) | Need a new bigger elastic search installatin. (DS) |

### Things to be deleted?

These are services which are no longer required (to be confirmed) and can be deleted from swarm once the cluster01-05 have been replaced.

[aisrinville12geojson.dm.marine.ie](//aisrinville12geojson.dm.marine.ie) *

[aisrinville12gpsdjson.dm.marine.ie](//aisrinville12gpsdjson.dm.marine.ie) *

[aisrinville12kafka.dm.marine.ie](//aisrinville12kafka.dm.marine.ie) *

[testing.dm.marine.ie](//testing.dm.marine.ie)

[testmqtt.dm.marine.ie](//testmqtt.dm.marine.ie)

[sciwms.dm.marine.ie](//sciwms.dm.marine.ie) 

[geonetwork.dm.marine.ie](//geonetwork.dm.marine.ie)

[geonode.dm.marine.ie](//geonode.dm.marine.ie)

[geoserver.dm.marine.ie](//geoserver.dm.marine.ie)

[jupyter.dm.marine.ie](//jupyter.dm.marine.ie)

[ysi2cassandra.dm.marine.ie](//ysi2cassandra.dm.marine.ie)

[ysi2mssql.dm.marine.ie](//ysi2mssql.dm.marine.ie)

[virtuoso.dm.marine.ie](//virtuoso.dm.marine.ie)

[mapserver.dm.marine.ie](//mapserver.dm.marine.ie)
