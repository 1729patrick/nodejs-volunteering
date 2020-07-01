-- -------------------------------------------------------------
-- TablePlus 3.1.2(296)
--
-- https://tableplus.com/
--
-- Database: volunteering
-- Generation Time: 2020-06-07 14:37:57.6170
-- -------------------------------------------------------------
DROP DATABASE IF EXISTS "volunteering";
CREATE DATABASE "volunteering"

DROP TABLE IF EXISTS "public"."Companies";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Companies_id_seq";

-- Table Definition
CREATE TABLE "public"."Companies" (
    "id" int4 NOT NULL DEFAULT nextval('"Companies_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "image_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Images";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Images_id_seq";

-- Table Definition
CREATE TABLE "public"."Images" (
    "id" int4 NOT NULL DEFAULT nextval('"Images_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "path" varchar(255) NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."MotivationAreas";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "MotivationAreas_id_seq";

-- Table Definition
CREATE TABLE "public"."MotivationAreas" (
    "id" int4 NOT NULL DEFAULT nextval('"MotivationAreas_id_seq"'::regclass),
    "description" varchar(255) NOT NULL,
    "is_active" bool NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."ProjectActivities";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "ProjectActivities_id_seq";

-- Table Definition
CREATE TABLE "public"."ProjectActivities" (
    "id" int4 NOT NULL DEFAULT nextval('"ProjectActivities_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "description" varchar(255) NOT NULL,
    "project_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."ProjectDates";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "ProjectDates_id_seq";

-- Table Definition
CREATE TABLE "public"."ProjectDates" (
    "id" int4 NOT NULL DEFAULT nextval('"ProjectDates_id_seq"'::regclass),
    "start" timestamptz NOT NULL,
    "end" timestamptz NOT NULL,
    "type" varchar(255) NOT NULL,
    "project_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."ProjectMembers";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "ProjectMembers_id_seq";

-- Table Definition
CREATE TABLE "public"."ProjectMembers" (
    "id" int4 NOT NULL DEFAULT nextval('"ProjectMembers_id_seq"'::regclass),
    "privacy" varchar(255) NOT NULL,
    "is_owner" bool NOT NULL,
    "user_id" int4 NOT NULL,
    "project_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Projects";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Projects_id_seq";

-- Table Definition
CREATE TABLE "public"."Projects" (
    "id" int4 NOT NULL DEFAULT nextval('"Projects_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "summary" varchar(255) NOT NULL,
    "intervation_area" varchar(255) NOT NULL,
    "target_audience" varchar(255) NOT NULL,
    "goals" varchar(255),
    "required_course" varchar(255),
    "entities" varchar(255),
    "observations" varchar(255),
    "is_active" bool NOT NULL DEFAULT TRUE,
    "is_approved" bool NOT NULL DEFAULT FALSE,
    "image_id" int4,
    "user_id" int4,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."UserMotivationAreas";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "UserMotivationAreas_id_seq";

-- Table Definition
CREATE TABLE "public"."UserMotivationAreas" (
    "id" int4 NOT NULL DEFAULT nextval('"UserMotivationAreas_id_seq"'::regclass),
    "user_id" int4 NOT NULL,
    "motivationarea_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."UserProjectVoluntaryAreas";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "UserProjectVoluntaryAreas_id_seq";

-- Table Definition
CREATE TABLE "public"."UserProjectVoluntaryAreas" (
    "id" int4 NOT NULL DEFAULT nextval('"UserProjectVoluntaryAreas_id_seq"'::regclass),
    "voluntaryarea_id" int4 NOT NULL,
    "project_id" int4 NOT NULL,
    "user_id" int4 NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Users";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Users_id_seq";

-- Table Definition
CREATE TABLE "public"."Users" (
    "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "phone" varchar(255),
    "city" varchar(255),
    "date_of_birth" varchar(255),
    "status" varchar(255),
    "school" varchar(255),
    "course" varchar(255),
    "observations" varchar(255),
    "is_admin" bool NOT NULL default false,
    "privacy" varchar(255) NOT NULL default false,
    "company_id" int4,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."VoluntaryAreas";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "VoluntaryAreas_id_seq";

-- Table Definition
CREATE TABLE "public"."VoluntaryAreas" (
    "id" int4 NOT NULL DEFAULT nextval('"VoluntaryAreas_id_seq"'::regclass),
    "description" varchar(255) NOT NULL,
    "is_active" bool NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);


