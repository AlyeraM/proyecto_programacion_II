toc.dat                                                                                             0000600 0004000 0002000 00000015027 14651307546 0014457 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                           |            proyectoprogramacion    15.5    15.5     9           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         :           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         ;           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         <           1262    31279    proyectoprogramacion    DATABASE     �   CREATE DATABASE proyectoprogramacion WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
 $   DROP DATABASE proyectoprogramacion;
                postgres    false                     2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false         =           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    6                     3079    31280    dblink 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;
    DROP EXTENSION dblink;
                   false    6         >           0    0    EXTENSION dblink    COMMENT     _   COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';
                        false    2         �            1259    31366    tipousuario    TABLE     m   CREATE TABLE public.tipousuario (
    id_tipousuario integer NOT NULL,
    tipo_usuario character varying
);
    DROP TABLE public.tipousuario;
       public         heap    postgres    false    6         �            1259    31371    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    usuario_id integer NOT NULL,
    nombre character varying NOT NULL,
    apellido character varying NOT NULL,
    usuario_nombre character varying,
    usuario_clave character varying,
    usuario_email character varying NOT NULL,
    profile_picture character varying,
    tipo integer,
    dep integer,
    histoclave integer,
    estatus integer DEFAULT 1
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false    6         �            1259    31589    consulta_info_user    VIEW     :  CREATE VIEW public.consulta_info_user AS
 SELECT us.usuario_id,
    us.nombre,
    us.apellido,
    us.usuario_clave,
    us.usuario_email,
    us.tipo,
    us.dep,
    tpo.id_tipousuario,
    tpo.tipo_usuario
   FROM (public.usuarios us
     LEFT JOIN public.tipousuario tpo ON ((tpo.id_tipousuario = us.tipo)));
 %   DROP VIEW public.consulta_info_user;
       public          postgres    false    216    216    217    217    217    217    217    217    217    6         �            1259    31487    tipousuario_id_tipousuario_seq    SEQUENCE     �   CREATE SEQUENCE public.tipousuario_id_tipousuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.tipousuario_id_tipousuario_seq;
       public          postgres    false    216    6         ?           0    0    tipousuario_id_tipousuario_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.tipousuario_id_tipousuario_seq OWNED BY public.tipousuario.id_tipousuario;
          public          postgres    false    218         �            1259    31489    usuarios_usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_usuario_id_seq;
       public          postgres    false    217    6         @           0    0    usuarios_usuario_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_usuario_id_seq OWNED BY public.usuarios.usuario_id;
          public          postgres    false    219         �           2604    31498    tipousuario id_tipousuario    DEFAULT     �   ALTER TABLE ONLY public.tipousuario ALTER COLUMN id_tipousuario SET DEFAULT nextval('public.tipousuario_id_tipousuario_seq'::regclass);
 I   ALTER TABLE public.tipousuario ALTER COLUMN id_tipousuario DROP DEFAULT;
       public          postgres    false    218    216         �           2604    31500    usuarios usuario_id    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN usuario_id SET DEFAULT nextval('public.usuarios_usuario_id_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN usuario_id DROP DEFAULT;
       public          postgres    false    219    217         3          0    31366    tipousuario 
   TABLE DATA           C   COPY public.tipousuario (id_tipousuario, tipo_usuario) FROM stdin;
    public          postgres    false    216       3379.dat 4          0    31371    usuarios 
   TABLE DATA           �   COPY public.usuarios (usuario_id, nombre, apellido, usuario_nombre, usuario_clave, usuario_email, profile_picture, tipo, dep, histoclave, estatus) FROM stdin;
    public          postgres    false    217       3380.dat A           0    0    tipousuario_id_tipousuario_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.tipousuario_id_tipousuario_seq', 3, true);
          public          postgres    false    218         B           0    0    usuarios_usuario_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.usuarios_usuario_id_seq', 153, true);
          public          postgres    false    219         �           2606    31588    usuarios PrimaryKey_TblUsuarios 
   CONSTRAINT     |   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "PrimaryKey_TblUsuarios" PRIMARY KEY (nombre, apellido, usuario_email);
 K   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT "PrimaryKey_TblUsuarios";
       public            postgres    false    217    217    217         �           2606    31538    tipousuario tipousuario_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_pkey PRIMARY KEY (id_tipousuario);
 F   ALTER TABLE ONLY public.tipousuario DROP CONSTRAINT tipousuario_pkey;
       public            postgres    false    216                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 3379.dat                                                                                            0000600 0004000 0002000 00000000054 14651307546 0014271 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Administrador
3	Usuario
0	SuperAdmin
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    3380.dat                                                                                            0000600 0004000 0002000 00000000170 14651307546 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        153	paola	menese	\N	07865c00d9c1f40d459e88643a6d4ce5	alyera03@gmail.com	../inicio/uploads/FotoAlyera.jpg	1	\N	\N	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                        restore.sql                                                                                         0000600 0004000 0002000 00000013634 14651307546 0015406 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5
-- Dumped by pg_dump version 15.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE proyectoprogramacion;
--
-- Name: proyectoprogramacion; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE proyectoprogramacion WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';


ALTER DATABASE proyectoprogramacion OWNER TO postgres;

\connect proyectoprogramacion

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tipousuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipousuario (
    id_tipousuario integer NOT NULL,
    tipo_usuario character varying
);


ALTER TABLE public.tipousuario OWNER TO postgres;

--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    usuario_id integer NOT NULL,
    nombre character varying NOT NULL,
    apellido character varying NOT NULL,
    usuario_nombre character varying,
    usuario_clave character varying,
    usuario_email character varying NOT NULL,
    profile_picture character varying,
    tipo integer,
    dep integer,
    histoclave integer,
    estatus integer DEFAULT 1
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: consulta_info_user; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.consulta_info_user AS
 SELECT us.usuario_id,
    us.nombre,
    us.apellido,
    us.usuario_clave,
    us.usuario_email,
    us.tipo,
    us.dep,
    tpo.id_tipousuario,
    tpo.tipo_usuario
   FROM (public.usuarios us
     LEFT JOIN public.tipousuario tpo ON ((tpo.id_tipousuario = us.tipo)));


ALTER TABLE public.consulta_info_user OWNER TO postgres;

--
-- Name: tipousuario_id_tipousuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipousuario_id_tipousuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipousuario_id_tipousuario_seq OWNER TO postgres;

--
-- Name: tipousuario_id_tipousuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipousuario_id_tipousuario_seq OWNED BY public.tipousuario.id_tipousuario;


--
-- Name: usuarios_usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_usuario_id_seq OWNER TO postgres;

--
-- Name: usuarios_usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_usuario_id_seq OWNED BY public.usuarios.usuario_id;


--
-- Name: tipousuario id_tipousuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipousuario ALTER COLUMN id_tipousuario SET DEFAULT nextval('public.tipousuario_id_tipousuario_seq'::regclass);


--
-- Name: usuarios usuario_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN usuario_id SET DEFAULT nextval('public.usuarios_usuario_id_seq'::regclass);


--
-- Data for Name: tipousuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipousuario (id_tipousuario, tipo_usuario) FROM stdin;
\.
COPY public.tipousuario (id_tipousuario, tipo_usuario) FROM '$$PATH$$/3379.dat';

--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (usuario_id, nombre, apellido, usuario_nombre, usuario_clave, usuario_email, profile_picture, tipo, dep, histoclave, estatus) FROM stdin;
\.
COPY public.usuarios (usuario_id, nombre, apellido, usuario_nombre, usuario_clave, usuario_email, profile_picture, tipo, dep, histoclave, estatus) FROM '$$PATH$$/3380.dat';

--
-- Name: tipousuario_id_tipousuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipousuario_id_tipousuario_seq', 3, true);


--
-- Name: usuarios_usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_usuario_id_seq', 153, true);


--
-- Name: usuarios PrimaryKey_TblUsuarios; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "PrimaryKey_TblUsuarios" PRIMARY KEY (nombre, apellido, usuario_email);


--
-- Name: tipousuario tipousuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_pkey PRIMARY KEY (id_tipousuario);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    