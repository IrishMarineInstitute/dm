
### Web enabled sites and services running in docker (swarm)
| Service Name | Link | *=proxy | Source | Notes |
|  ----        |----- | ------- | ------ | ----- |
| mqttbridge       | [mqtt.marine.ie](//mqtt.marine.ie) |   | [dm.mqtt](https://github.com/IrishMarineInstitute/dm.mqtt) TODO: rename to mqttbridge on github | This is based on [mosca](https://github.com/mcollina/mosca) |
| rundeck          | [rundeck.dm.marine.ie](//rundeck.dm.marine.ie)                                 |   | [rundeck.dm](https://github.com/IrishMarineInstitute/rundeck.dm) | Admin tool for running scheduled jobs. |
| weather          | [weather.dm.marine.ie](//weather.dm.marine.ie)                                 |   | [dm.weather](https://github.com/IrishMarineInstitute/dm.weather) | weewx with rinvile rooftop airmar |
| dashboard        | [dashboard.sysadmin.dm.marine.ie](//dashboard.sysadmin.dm.marine.ie)           |   | [dm.dashboard](https://github.com/IrishMarineInstitute/dm.dashboard) | | 
| streamsets       | [streamsets.dm.marine.ie](//streamsets.dm.marine.ie)                           | * | | TODO: talk to Damian about it |
| vector           | [vector.sysadmin.dm.marine.ie](//vector.sysadmin.dm.marine.ie)                 |   | TODO: put on github | Vanilla build of vector in Docker |
| dm               | [dm.marine.ie](//dm.marine.ie)                                                 |   | [dm](https://github.com/IrishMarineInstitute/dm) | This page |
| nodered01        | [nodered01.dm.marine.ie](//nodered01.dm.marine.ie)                             |   | TODO: put on github | Variety of flows TODO: move to separate node-red instances |
| noderedairmar    | [noderedairmar.dm.marine.ie](//noderedairmar.dm.marine.ie)                     |   | [dm.noderedairmar](https://github.com/IrishMarineInstitute/dm.noderedairmar) | Flows for airmar weather station |
| graphqldap    | [graphqldap.dm.marine.ie](//graphqldap.dm.marine.ie)                     |   | [Graphql-DAP](https://github.com/IrishMarineInstitute/graphql-DAP) | API V1 |
| graphqldap-v1-examples    | [graphqldap-v1-examples.dm.marine.ie](//graphqldap-v1-examples.dm.marine.ie)                     |   | [graphqldap_v1_examples](https://github.com/IrishMarineInstitute/graphqldap_v1_examples) | V1 API examples |
| noderedais       | [noderedais.dm.marine.ie](//noderedais.dm.marine.ie)                           |   | [dm.noderedais](https://github.com/IrishMarineInstitute/dm.noderedais) | Flows for ais |
| noderedwavebuoys | [noderedwavebuoys.dm.marine.ie](//noderedwavebuoys.dm.marine.ie)               |   | TODO: put on github | Flows for wave buoys|
| node-red         | [node-red.dm.marine.ie](//node-red.dm.marine.ie)                               | * | TODO: put in git | Variety of flows to be moved |
| gconode03        | [gconode03.dm.marine.ie](//gconode03.dm.marine.ie)                             | * | TODO: put in git | Node-red with various flows (TODO: split out ) at spiddal shore station |
| belmullet2tcp    | N/A                                                                            |   | [dm.belmullet](https://github.com/IrishMarineInstitute/dm.belmullet2tcp) | Access via tcp dm.marine.ie:port??? |
| rinvilleaiskplex | N/A                                                                            |   | [dm.rinvilleaiskplex](https://github.com/IrishMarineInstitute/dm.rinvilleaiskplex) | Access via tcp dm.marine.ie:2101 |
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

Each is a haproxy configuration to the corresponding backend service (pcp-web). Note we are not installing pcp on the new dmdock0* servers (no ubuntu package)

| Service Name | Link | Notes |
|  ----        |----- | ----- |
| cassandra01  | [cassandra01.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra01.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra02  | [cassandra02.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra02.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra03  | [cassandra03.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra03.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra04  | [cassandra04.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra04.pcp.dm.marine.ie&hostspec=localhost) | |
| cassandra05  | [cassandra05.pcp.dm.marine.ie](//vector.sysadmin.dm.marine.ie/#/?host=cassandra05.pcp.dm.marine.ie&hostspec=localhost) | |
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
| synology     | [synology.dm.marine.ie](//synology.dm.marine.ie)           | Does anybody use this link? Or delete it |
| kibana       | [kibana.dm.marine.ie](//kibana.dm.marine.ie) (not working) | Need a new bigger elastic search installatin. (DS) |
