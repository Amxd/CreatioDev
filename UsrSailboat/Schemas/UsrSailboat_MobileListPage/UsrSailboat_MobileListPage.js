{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "HeaderContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"caption": "Folders",
				"rootSchemaName": "UsrSailboat"
			}
		},
		{
			"operation": "merge",
			"name": "ListContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "List",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "ListItem",
			"values": {
				"body": [
					{
						"value": "$PDS_CreatedOn"
					},
					{
						"value": "$PDS_CreatedBy"
					}
				],
				"title": "$PDS_UsrName"
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes",
				"Items",
				"viewModelConfig",
				"attributes"
			],
			"values": {
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"PDS_UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"PDS_CreatedOn": {
					"modelConfig": {
						"path": "PDS.CreatedOn"
					}
				},
				"PDS_CreatedBy": {
					"modelConfig": {
						"path": "PDS.CreatedBy"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"dataSources",
				"PDS",
				"config"
			],
			"values": {
				"entitySchemaName": "UsrSailboat"
			}
		}
	]
}