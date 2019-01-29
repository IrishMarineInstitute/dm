# Servers
<!---
 The table is used by rundeck script, so don't change placement
 or meaning columns up to and including osVersion !!! (OK to add other columns)
 One line per row.
-->
|   ip       | hostname | description | tags         | rundeck project | rundeck username | osArch | osFamily | osName | osVersion |
| ---------- |--------- | ----------- | ------------ | --------------- | -----------------| ------ | -------  | ------ | --------- |
| 172.17.1.89 | data01 | data01 server | data | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.90 | data02 | data02 server | data | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.91 | data03 | data03 server | data | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.13 | dmdmznexstor01 | nginx video server | dmdmznexstor01,video | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-130-generic |
| 172.17.1.92 | dmdock02 | dmdock02 server | swarm | uwobs | opsuser | amd64 | unix | Linux | 4.15.0-36-generic |
| 172.17.1.93 | dmdock03 | dmdock03 server | swarm | uwobs | opsuser | amd64 | unix | Linux | 4.15.0-36-generic |
| 172.17.1.94 | dmdock04 | dmdock04 server | swarm | uwobs | opsuser | amd64 | unix | Linux | 4.15.0-36-generic |
| 172.17.1.95 | dmdock05 | dmdock05 server | swarm | uwobs | opsuser | amd64 | unix | Linux | 4.15.0-36-generic |
| 172.17.1.96 | dmdock06 | dmdock06 server | swarm | uwobs | opsuser | amd64 | unix | Linux | 4.15.0-36-generic |
| 172.17.1.113 | dmubnode01 | cassandra server | cassandra | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-36-generic |
| 172.17.1.114 | dmubnode02 | cassandra server | cassandra | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-34-generic |
| 172.17.1.115 | dmubnode03 | cassandra server | cassandra | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-34-generic |
| 172.17.1.116 | dmubnode04 | cassandra server | cassandra | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-34-generic |
| 172.17.1.117 | dmubnode05 | cassandra server | cassandra | uwobs | opsuser | amd64 | unix | Linux | 4.4.0-34-generic |
| 172.17.1.83 | dockerub | spiddal.marine.ie nginx server | nginx | uwobs | dmuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.118 | erddap3 | erddap server | erddap,erddap3 | uwobs | dmuser | amd64 | unix | Linux | 4.4.0-127-generic |
| 172.16.255.226 | gconode01 | gconode01 server | das | uwobs | gcouser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.86 | kafka01 | kafka01 server | kafka | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.87 | kafka02 | kafka02 server | kafka | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.17.1.88 | kafka03 | kafka03 server | kafka | uwobs | opsuser | amd64 | unix | Linux | 3.13.0-71-generic |
| 172.16.255.15 | nms | spiddal nms server | das | uwobs | Administrator | amd64 | windows | windows | windows |
| 172.16.255.19 | spidvid | spidvid server | video | uwobs | dmuser | amd64 | unix | Linux | 3.13.0-71-generic |

