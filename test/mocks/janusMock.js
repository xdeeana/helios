var janusMock = [{
  "_id": "5662f7454445531540000000",
  "created_at": "2015-12-05T14:40:05+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e3",
  "event_status": "finished",
  "job_status": "SUCCESS",
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v2.132.4521"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["ultron"],
  "time": "2015-12-05T14:40:05+00:00",
  "type": "deploy"
}, {
  "_id": "5662f7454445531540000001",
  "created_at": "2015-12-05T02:43:25+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e3",
  "event_status": "started",
  "job_status": null,
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v2.132.4521"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["ultron"],
  "time": "2015-12-05T02:43:25+00:00",
  "type": "deploy"
}, {
  "_id": "5662f7454445531540000002",
  "created_at": "2015-12-04T14:46:45+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e2",
  "event_status": "finished",
  "job_status": "SUCCESS",
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v1.231.82"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["proteus"],
  "time": "2015-12-04T14:46:45+00:00",
  "type": "deploy"
}, {
  "_id": "5662f7454445531540000003",
  "created_at": "2015-12-04T02:50:05+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e2",
  "event_status": "started",
  "job_status": null,
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v1.231.82"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["proteus"],
  "time": "2015-12-04T02:50:05+00:00",
  "type": "deploy"
}, {
  "_id": "5662f7454445531540000004",
  "created_at": "2015-12-03T14:53:25+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e4",
  "event_status": "finished",
  "job_status": "SUCCESS",
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v7.45"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["wasp"],
  "time": "2015-12-03T14:53:25+00:00",
  "type": "deploy"
}, {
  "_id": "5662f7454445531540000005",
  "created_at": "2015-12-03T02:56:45+00:00",
  "dc": null,
  "description": null,
  "details": null,
  "env": "e4",
  "event_status": "started",
  "job_status": null,
  "job_status_doc": null,
  "metadata": {
    "artifact_version": "v7.45"
  },
  "reference_url": "https://github.com/Accordance/accordance.github.io/wiki/Change-Status-Info",
  "source": null,
  "systems": ["wasp"],
  "time": "2015-12-03T02:56:45+00:00",
  "type": "deploy"
}];

$httpBackend.whenGET('/janus').respond(janusMock);
