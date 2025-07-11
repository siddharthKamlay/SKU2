CREATE TABLE `DemandRequestSid`(
	`Category` VARCHAR(40),
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`EnrichedQTY` VARCHAR(40),
	`Forecasted` VARCHAR(40),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Name` VARCHAR(40),
	`RequestDate` VARCHAR(40),
	`Requested` VARCHAR(40),
	`RequestedBy` VARCHAR(40),
	`SKUID` VARCHAR(40) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	`Status` VARCHAR(40),
	`Stock` VARCHAR(40),
	PRIMARY KEY(`SKUID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `DemandRequestSid`
	ADD CONSTRAINT `30ff0928f5ee20992770d69338e241` UNIQUE KEY(`SKUID`);
